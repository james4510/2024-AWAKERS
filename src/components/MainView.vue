<template>
    <div class="attendancePage">
        <div id="attendanceBox">
            <div class="attendance">
                <p>출석관리</p>
            </div>
        </div>
        <div id="contentsBox">
            <p>일정 선택</p>
            <div class="buttonBox">
                <div class="buttonBackground">
                    <div class="event" v-for="eventName in events" :key="eventName">
                        <button class="event">{{ eventName }}</button>
                    </div>
                    <ul class="eventSequence">
                        <li>
                            <p>최신순</p>
                            <ul class="subSequence">
                                <li><p>인원순</p></li>                        
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            events: ['전체', '예배', '행사', '봉사'],
            sequence: ['최신순', '인원순'],
        }
    },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.attendancePage{
    width: 324px;
    height: 700px;
    border-radius: 50px;
    background: white;
    box-shadow: 5px 5px 10px gray;

    #attendanceBox {
        width: 100%;
        height: 10%;

        .attendance{
            @include c-center;
            width: 100%;
            height: 100%;
            font-size: 90%;
            font-weight: bold;
        }
    }
    
    #contentsBox{
            width: 100%;
            height: 60%;

            p{
                @include center;
                width: 90px;
                height: 75px;
                font-weight: bold;
            }

            .buttonBox{
                @include center;
                width: 200px;
                height: 1px;

                .buttonBackground{
                    width: 250px;
                    height: 40px;
                    background-color: transparent;
                    border-radius: 10px;
                    display: flex;
                    

                    button{
                        width: 42px;
                        height: 28px;
                        border: 0;
                        border-radius: 2px;
                        outline: 0;
                        margin-left: 10px;
                        cursor: pointer;

                        &.event{
                            background:rgb(187, 187, 187);
                            color: rgb(83, 83, 83);
                            font-size: 74%;
                        }
                        &.event:hover{
                            background-color: rgb(63, 60, 60);
                            color: rgb(208, 208, 208);
                            transition: 0.3s;
                            font-size: 74%;
                        }
                    }

                    .eventSequence{
                        width: 120px;
                    }
                }
            }
        }
    }

</style>