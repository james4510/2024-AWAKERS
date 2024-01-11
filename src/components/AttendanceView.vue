<template>
    <div>
        <!-- 출석관리 문자열 -->
        <div class="attendanceHeader">
            <!-- 뒤로가기 아이콘 -->
            <a href="javascript:history.back()"><img src="../assets/chevron-left.svg" alt="뒤로가기"/></a>
            <p class="attendanceTitle">출석관리</p>
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

.attendanceHeader{
    text-align: center;
    font-size: 15px;
    margin-top: 20px;
    display: flex;

    .attendanceTitle{
        margin: 5px 5px 5px -20px;
        height: 100%;
        width: 100%;
    }
}

</style>