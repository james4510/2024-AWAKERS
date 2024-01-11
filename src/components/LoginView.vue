<template>
<div class="LoginView">
    <div>
        <!-- 로그인 문자열 -->
        <div class="loginHeader">
            <!-- 뒤로가기 아이콘 -->
            <a href="javascript:history.back()"><img src="../assets/chevron-left.svg" alt="뒤로가기"/></a>
            <p class="loginTitle">로그인</p>
        </div>
        
        <!-- 어웨이커스 로고 -->
        <img src="../assets/어웨이커스.svg" alt="AWAKERS LOGO" class="loginImage" />
        
        <div class="inputData">

            <!-- 이름 입력란 -->
            <input type="text" id="name" placeholder="이름" class="bottomBorder" v-model="name"/>

            <!-- 전화번호 입력란 -->
            <input type="text" id="phone" placeholder="연락처" class="bottomBorder" v-model="phoneNumber" />
        
        </div>

    </div>
        
    <footer>
        <!-- 로그인 버튼 -->
        <button @click="login">로그인 하기</button>
    </footer>
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

.LoginView{
        .loginHeader{
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
        display: flex;

        .loginTitle{
            margin: 5px 5px 5px -20px;
            height: 100%;
            width: 100%;
        }
    
    }

    .loginImage{
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
            width: 320px;
            padding: 5px;
            margin-bottom: 10px;
        }

        input:focus{
            outline: none;
        }
    }

    .bottomBorder{
        border-width: 0 0 1px;
    }

    footer{
        position: absolute;
        bottom: 20px;
    }
    button{
        width: 350px;
        padding: 10px;
        background-color: #606761;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        bottom: 0;
    }
    button:hover{
        background-color: #171a17;
    }
}

</style>