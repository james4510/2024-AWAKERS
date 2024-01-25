import  {createRouter, createWebHashHistory} from 'vue-router';
import AttendancePage from '~/pages/AttendancePage';
import LoginPage from '~/pages/LoginPage';
import "../assets/chevron-left.svg";
import "../assets/options-horizontal.svg";
import "../assets/close.svg";
import "../assets/plus-square.svg";

export default createRouter({
    // hash모드: 특정 페이지에서 새로고침을 했을 때, '페이지를 찾을 수 없음'과 같은 메시지 알림을 방지
    history: createWebHashHistory(),

    // pages: page를 구분해주는 개념
    routes: [
        {
            path: "/",
            name: LoginPage,
            component: LoginPage,
        },
        {
            // 페이지 경로
            path: "/AttendancePage",
            name: AttendancePage,
            component: AttendancePage,
        },
    ],
});
