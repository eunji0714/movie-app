import React, {useState} from 'react';

const App = () => {

    // 상태, 함수, 상수, 변수를 선언하는 곳

    const [name, setName] = useState(0)

    const changeName = () => {
        setName(7)
    }

    // 화면에 보여지는 곳 -> html을 기반으로 만들어짐

    return (
        <div>
            <h1>hello world</h1>
            <h1>{name}</h1>
            <button onClick={() => changeName()}>
                이름넣기
            </button>
        </div>
    );
};

export default App;

// 코드빌드순서
// 1. 위에서 아래로
// 2. '='를 기준으로 우측으로 좌측으로 치환
// 3. .은 하위 메소드를 호출할 때 사용
// 4. ,는 그리고로 해석
// 5. js에서 ()는 함수들의 모음 button에서 ()는 클릭했다는 의미