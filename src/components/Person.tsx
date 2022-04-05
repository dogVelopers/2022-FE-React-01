// 클래스 컴포넌트
// ErrorBoundary는 무조건 클래스 컴포넌트로만

// Props
// 컴포넌트를 사용하는 곳 외부에서 주입하는 것

// 컴포넌트에 props 정의
interface Props{
    name: string;
    age: number;
}

// 함수 컴포넌트(요즘은 대부분 함수 컴포넌트를 사용한다.)
// 변수명 : Props
function Person(props: Props){
    return(
        <div className="main">
            <p>
                이름은 <span className="highlight">{props.name}</span>, 
                나이는 <span className="highlight">{props.age}살</span> 입니다.
            </p>
        </div>
    )
}


export default Person;
// export default 컴포넌트 이름
// 이 파일의 기본적으로 내보내는 것은 Person이라는 함수, 컴포넌트이다.