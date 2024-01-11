<template>
    <div>
        <!-- 뒤로가기 아이콘 -->
        <img src="../assets/chevron-left.svg" alt="뒤로가기" @click="goBack" />
        
        <!-- 로그인 문자열 -->
        <div class="login-header">로그인</div>
        
        <!-- 어웨이커스 로고 -->
        <img src="../assets/어웨이커스.svg" alt="AWAKERS LOGO" class="login-image" />
        
        <!-- 이름 입력란 -->
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" />

        <!-- 전화번호 입력란 -->
        <label for="phone">전화번호</label>
        <input type="text" id="phone" v-model="phoneNumber" />

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
    font-size: 24px;
    margin-top: 20px;
}

.login-image{
    display: block;
    margin: 20px auto;
    max-width: 100%;
    height: auto;
}

label{
    display: block;
    margin-top: 10px;
}

input{
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

button{
    width: 100%;
    padding: 10px;
    background-color: #68776a;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover{
    background-color: #171a17;
}

</style>