<template>
    <div>
        <!-- 로그인 문자열 -->
        <div class="login-header">
            <!-- 뒤로가기 아이콘 -->
            <img src="../assets/chevron-left.svg" alt="뒤로가기" @click="goBack" />
            <p class="p01">로그인</p>
        </div>
        
        <!-- 어웨이커스 로고 -->
        <img src="../assets/어웨이커스.svg" alt="AWAKERS LOGO" class="login-image" />
        

        <div class="inputData">

            <!-- 이름 입력란 -->
            <input type="text" id="name" placeholder="이름" class="bottom-border" v-model="name"/>

            <!-- 전화번호 입력란 -->
            <input type="text" id="phone" placeholder="연락처" class="bottom-border" v-model="phoneNumber" />
        
        </div>
        
        <!-- 로그인 버튼 -->
        <button @click="login">로그인 하기</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            phoneNumber: "",
        };
    },
    methods: {
        goBack(){
            //뒤로가기 로직
        },
        login(){
            //로그인 로직
            console.log("로그인 시도:", this.name, this.phoneNumber);
            //여기에 실제 로그인 로직 추가하기
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.login-header{
    text-align: center;
    font-size: 15px;
    margin-top: 20px;
    display: flex;

    .p01{
        margin: 5px 5px 5px -20px;
        height:100%;
        width: 100%;

    }
    
}

.login-image{
    display: block;
    margin: 50px auto;
    max-width: 100%;
    height: auto;
}

label{
    display: block;
    margin-top: 10px;
}

.inputData{
    line-height: 60px;
    input{
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    }

    input:focus{
        outline: none;
    }
}

.bottom-border{
    border-width: 0 0 1px;
}

button{
    width: 350px;
    padding: 10px;
    background-color: #606761;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
}
button:hover{
    background-color: #171a17;
}

</style>