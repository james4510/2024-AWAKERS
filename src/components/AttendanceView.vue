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
                        <div class="title">일정 선택</div>    

                        <!--토스트 팝업 메뉴 버튼 -->
                        <div class="toast">
                            <button type="button" class="toastButton">
                                <img src="../assets/plus-square.svg" @click="isOpen=true" alt="Add Event" class="addButton">
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
                </div>
                
                <!-- 컨텐츠 -->
                <div class="contentsContainer">
                    <div class="contents">
                        <div v-for="event in events" :key="event.id" class="contentsBox">
                            <div class="contentsTitle">{{ event.name }}</div>
                            <div class="contentsDate">{{ event.date }}</div>
                            <div class="etc">
                                <div class="attendance">{{ event.attendees }}명 출석</div>
                                <div class="type">{{ event.type }}</div>
                            </div>
                            <img src="../assets/options-horizontal.svg" alt="Edit Event" class="edditEvents" />
                        </div>

                        <!-- 스크롤을 감지하기 위한 이벤트 리스너 -->
                        <div ref="scrollContainer" @scroll="handleScroll" class="scrollContainer"></div>
                    </div>
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
            isOpen: false,
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
                type: `예배`
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
    margin: 0;
    
    
    .blackBg{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;

        /*
        //모달창 UI 예제
        .whiteBg{
            width: 350px;
            height: 150px;
            background: white;
            border-radius: 20px;
            padding: 20px;
            margin: auto;
            position: relative;

            .modalHeader{
                width: 100%;
                font-size: 20px;
                font-weight: bold;
                color: rgb(123, 121, 121);
                display: flex;

                .closeBtn{
                    margin-left: auto;
                    cursor: pointer;
                }
            }

            .editEvent{
                width: 250px;
                height: 150px;
                flex-direction: column;
                display: inline-flex;
                gap: 7px;
            }
        }
    */

}
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
                color: gray;
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
                font-size: 18px;
                width: 330px;
                height: 24px;
                display: flex;
                .title{
                    color: rgb(118, 114, 114);
                    margin-top: 3px;
                    font-weight: 800;
                    width: 80px;
                    height: 24px;
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

        .contentsContainer{
            .contents{
                width: 330px;
                height: 700px;
                //background: #fffa99;
                float: left;

                .contentsBox{
                    width: 290px;
                    height: 50px;
                    background-color: rgb(223, 219, 219);
                    border-radius: 10px;
                    padding: 16px;

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
                            color: gray;
                            background-color: white;
                            clear: both;
                            float: left;
                            width: 25px;
                            height: 16px;
                            border-radius: 6px;
                            font-weight: 650;
                            font-size: 10.8px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                    }

                    .edditEvents{
                        display: flex;
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
}


</style>