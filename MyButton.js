// 리액트 컴포넌트(아주 간단한 리액트의 함수 컴포넌트이며, 초반엔 다 이해하지 않아도 됨.)
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 돔의 렌더함수를 사용해서 리액트 컴포넌트를 돔 컨테이너에 렌더링하는 코드
// 이 코드가 필요한 이유: 스크립트 태그를 사용해서 컴포넌트를 가져온다고 해도 컴포넌트가 화면에 보이는 것이 아니기 때문.
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);