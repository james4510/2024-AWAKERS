<template>
    <body>
        <div class="wrap">
            <div class="header">
                <!-- 뒤로 가기 버튼 -->
                <div class="backButton">
                    <a href="javascript:history.back()" class="title"><img src="../assets/chevron-left.svg" alt="뒤로가기"/></a>
                </div>
                <!-- 페이지 제목-->
                <div class="titleContainer">
                    <h1>출석관리</h1>
                </div>
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
                        <h2>토글메뉴</h2>
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

*{
    margin: 0;
    padding: 0;
}

body{
    font: 15px;

    .wrap{
        width: 350px;
        height: 700px;
        margin: 0 auto;

        .header{
            font-size: 14px;
            margin-top: 30px;
            width: 350px;
            height: 80px;
            
            .backButton{
                float: left;
            }
            .titleContainer{
                text-align: center;
                padding-top: 5px;
                margin-right: 17px;
            }
        }

    .container{
        height: 800px;
        width: 350px;
        //background: #ccc;

        .menu{
            font-size: 17px;
            width: 350px;
            height: 50px;
            //background: #d3d5f3;
            float: left;
            display: flex;

            .filterMenu{
                width: 350px;
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
            width: 350px;
            height: 50px;
            .selectTypeButton{
                display: flex;
                gap: 7px;
                border-radius: 5px;
                height: 30px;
                width: 50px;
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
                width: 350px;
                height: 700px;
                //background: #fffa99;
                float: left;
            }  
    
        }
    }
}


</style>