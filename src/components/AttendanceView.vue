<template>
    <body>
        <div class="wrap">
            <div class="header">
                <!-- 뒤로 가기 버튼 -->
                <div class="backButton">
                    <a href="javascript:history.back()" class="title"><img src="../assets/chevron-left.svg" alt="뒤로가기"/></a>
                </div>
                <!-- 페이지 제목-->
                <p class="pageTitle">출석관리</p>
            </div>
            <div class="container">
                <div class="menu">
                    <div class="filterMenu">
                        <!-- 페이지 소제목-->
                        <div class="title">
                            일정 선택
                        </div>    

                        <!--토스트 팝업 메뉴 버튼 -->
                        <div class="toast">
                            <button type="button" class="toastButton">
                                <img src="../assets/options-horizontal.svg" @click="addEvent"  alt="Add Event" class="addButton">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 필터링 버튼 1 (전체, 예배별, 행사별, 봉사별)-->
                <div class="filterButton">
                    <div class="selectTypeButton">
                        <button class="selectType">전체</button>
                        <button class="selectType">예배</button>
                        <button class="selectType">행사</button>
                        <button class="selectType">봉사</button>
                    </div>

                    <!-- 필터링 버튼 2 (날짜순, 가나다순)-->
                    <div class="selectSequence">
                        <button class="dropDownButton">날짜 순</button>
                        
                    </div>
                </div>
                
                <!-- 컨텐츠 -->
                <div class="contents">
                    <div v-for="event in events" :key="event.id" class="contentsBox">
                        <div class="contentsTitle">{{ event.name }}</div>
                        <div class="contentsDate">{{ event.date }}</div>
                        <div class="etc">
                            <div class="attendance">{{ event.attendees }}명 출석</div>
                            <div class="type">{{ event.type }}</div>
                        </div>
                    </div>

                    <!-- 스크롤을 감지하기 위한 이벤트 리스너 -->
                    <div ref="scrollContainer" @scroll="handleScroll" class="scrollContainer"></div>
                </div>
            </div>
            
        </div>
    </body>
</template>

<script>

export default {
    data(){
        return {
            events: [
                {
                    name: 'AWAKE 예배',
                    date: '1월 7일',
                    attendees: 55,
                    type: '예배',
                },
            ],
        }
    },
    methods: {
        //스크롤 이벤트 핸들러
        handleScroll(){
            //스크롤이 끝에 도달하면 새로운 행사 추가
            if(
                this.$refs.scrollContainer.scrollTop +
                this.$refs.scrollContainer.clientheight >=
                this.$refs.scrollContainer.scollHeight
            ) {
                this.addEvent();
            }
        },
        //새로운 행사 추가 매서드
        addEvent(){
            const newEvent = {
                id: this.events.length + 1,
                name: `Event ${this.events.length + 1}`,
                date: `1월 7일`,     //행사 날짜는 실제 날짜로 대체하기
                attendees: Math.floor(Math.random() * 100) + 1,     //참석자 수는 랜덤
                type: ``
            };
            this.events.push(newEvent);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

body{
    font: 15px;

    .wrap{
        width: 330px;
        height: 700px;
        margin: 0 auto;

        .header{
            width: 330px;
            height: 80px;
            text-align: center;
            font-size: 15px;
            margin-top: 20px;
            display: flex;
            
            .backButton{
                float: left;
                cursor: pointer;
            }
            .pageTitle{
                margin: 5px 5px 5px -20px;
                height: 100%;
                width: 100%;
            }
        }

    .container{
        height: 800px;
        width: 330px;
        //background: #ccc;

        .menu{
            font-size: 17px;
            width: 330px;
            height: 50px;
            //background: #d3d5f3;
            float: left;
            display: flex;

            .filterMenu{
                width: 330px;
                height: 20px;
                display: flex;
                .title{
                    //color: rgb(83, 82, 82);
                    font-weight: 600;
                    width: 80px;
                    height: 20px;
                }

                .toast{
                    display: flex;
                    margin-left: auto;
                    .toastButton{
                        border: none;
                        background-color: transparent;
                        cursor: pointer;

                        .addButton{
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .filterButton{
            width: 330px;
            height: 100px;
            .selectTypeButton{
                display: flex;
                gap: 7px;
                border-radius: 5px;
                width: 200px;
                height: 30px;
                .selectType{
                    width: 50px;
                    height: 30px;
                    border : none;
                    border-radius : 4px;
                    color: rgb(91, 88, 88);
                    cursor: pointer;
                    //background-color: rgb(204, 198, 198);
                }
                .selectType:hover{
                    color: white;
                    background-color: rgb(88, 87, 87);
                }
            }

            .selectSequence{
                    .dropDownButton{
                        background-color: transparent;
                        border: none;

                    }
                }

        }
        .contents{
                width: 330px;
                height: 700px;
                //background: #fffa99;
                float: left;

                .contentsBox{
                    margin-top: 20px;
                    width: 310px;
                    height: 60px;
                    background-color: rgb(223, 219, 219);
                    border-radius: 10px;
                    padding: 10px;

                    .contentsTitle{
                        font-size: 17px;
                        font-weight: bold;
                        color: rgb(98, 97, 97);
                    }

                    .contentsDate{
                        font-size: 10px;
                        margin-top: 5px;
                        color: rgb(132, 129, 129);
                    }

                    .etc{
                        margin-top: 10px;
                        display: flex;
                        gap: 6px;
                        .attendance{
                            color: rgb(125, 124, 124);
                            font-weight: bold;
                            font-size: 13px;
                        }

                        .type{
                            clear: both;
                            float: left;
                            width: 27px;
                            height: 15px;
                            background-color: white;
                            border-radius: 10px;
                            font-size: 10px;
                            font-weight: 550;
                        }
                    }

                    .scrollContainer{
                        height: 300px;
                        overflow-y: scroll;
                    }
                }
            }  
    
        }
    }
}


</style>