import MainMenu from "../components/MainMenu/MainMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hiragana from "../components/Hiragana/Hiragana";
import Game from "../components/Game/Game";

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/hiragana">
                    <Hiragana />
                </Route>
                <Route path="/katakana">
                    {/* <Katakana /> */}
                    <p>kkk</p>
                </Route>
                <Route exact path="/">
                    <MainMenu />
                </Route>
                <Route path="/game">
                    {/* <Katakana /> */}
                    <Game />
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;
