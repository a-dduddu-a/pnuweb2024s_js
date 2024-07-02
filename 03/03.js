// 이벤트를 감지하는 명령어 addEventListener
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('안녕!!')
// });

// 화살표 함수 작성 방법.
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('화살표 함수')

    // 변수선언
    // const는 바뀜, rat은 안바뀜
    // const msg = document.getElementById('msg'); 이건 불편해서 요즘 잘 사용 안함. 대신 아래의 querySelector 사용.
    const msg = document.querySelector('#msg')
    // selector로 #사용 (css와 동일)
    const bt = document.querySelector('button');

    // msg.innerHTML = '<h1>안녕</h1>' => 태그 형식 안의 문자를 출력해줌
    // msg.textContent = '<h1>안녕</h1>' => 태그 형식 포함해서 모든 text를 그대로 출력해줌

    bt.addEventListener('click', ()=>{
       if (msg.innerHTML == '안녕') msg.innerHTML =='잘가~~';
       else msg.innerHTML = '안녕';
    });

});

