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
                            <button type="button" onclick="alert('팝업창')" class="toastButton">
                                <img src="../assets/options-horizontal.svg" alt="">
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
                        
                        <div class="subMenu">
                            <p>가나다 순</p>
                        </div>
                    </div>
                </div>
                
                <!-- 컨텐츠 -->
                <div class="contents">
                    <div class="contentsBox">
                        
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
                //행사 데이터 예시
                {
                    id: 1, 
                    title: '예배 1',
                    date: '2024-01-12',
                    attendance: 50,
                    type: '예배',
                },
            ],
        }
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
                    //background-color: rgb(204, 198, 198);
                }
                .selectType:hover{
                    color: white;
                    background-color: rgb(88, 87, 87);
                }
            }

        }
        .contents{
                width: 330px;
                height: 700px;
                //background: #fffa99;
                float: left;
            }  
    
        }
    }
}


</style>