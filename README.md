# node-reloaded

<!-- RestFull API 방식을 사용하지 않는 경우  -->

/ -> main
/join -> Join
/login ->Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

<!-- RestFull API 방식을 사용하는 경우 -->
<!-- 글로벌 라우터 -->

/ -> main
/join -> Join
/login ->Login
/search -> Search

<!-- users 로 시작하는 페이지 라우팅을 하기 위한 라우터 필요 -->

/users/edit -> Edit User
/users/delete -> Delete User

<!-- video 로 시작하는 페이지 라우팅을 하기 위한 라우터 필요 -->

/video/watch- -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> comment Video
/video/comments/delete -> Delete comments
