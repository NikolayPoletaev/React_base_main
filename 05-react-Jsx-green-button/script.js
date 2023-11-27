const App = ({ initialButtonText, initialButtonColor }) => {
    const [buttonText, setbuttonText] = React.useState(initialButtonText,);
    const [buttonColor, setbuttonColor] = React.useState(initialButtonColor);

    const onButtonClick = () => {
        setbuttonText('Hello from react!!!');
        setbuttonColor('green-btn');
    };

    return (
        <div className="app">
            {/*
                - в JSX классы подключаются при помощи className
                - внутри JSX используются двойные кавычки
                - при добавлении JS внутри JSX необходимо использовать {}
            */}
            <button className={buttonColor} onClick={onButtonClick}>{buttonText}</button>
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me"  initialButtonColor="setbuttonColor" />);