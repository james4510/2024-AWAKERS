<template>
    <div class="wrap">
        <div class="container">
            <LoginView />
        </div>
    </div>
</template>

<script>
import AttendanceView from "../components/AttendanceView.vue";
import LoginView from "../components/LoginView.vue";
export default { components: { AttendanceView, LoginView}};
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.wrap{
    @include center;
    width: 100%;
    height: 100%;
    font-size: 16px;

    .container{
        @include center;
        width: 55%;
        height: 90%;
        max-width: 1920px;
        max-height: 1354px;
    }
}
</style>