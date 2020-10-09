import React, {Component} from 'react';
import {HeaderBlock} from 'components';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PostsList from "./components/PostsList/PostsList";
import FullPost from "./components/FullPost/FullPost";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <HeaderBlock
                        title='Блог'
                        description='Текст'
                        imageUrl='data:image/png;base64,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'
                    />
                    <div className="container">
                        <div className="content">{/*
                        <button type="button" className="btn btn-primary">
                            Add post
                        </button>*/}
                            <div className="content">
                                <div>
                                    <Switch>
                                        <Route exact path="/" component={() => (
                                            <PostsList posts={[
                                                {
                                                    key: "1",
                                                    _id: "1",
                                                    title: "Статья",
                                                    createdAt: '' + new Date()
                                                },
                                                {
                                                    key: "2",
                                                    _id: "2",
                                                    title: "Статья 1",
                                                    createdAt: '' + new Date()
                                                },
                                                {
                                                    key: "3",
                                                    _id: "3",
                                                    title: "Статья 2",
                                                    createdAt: '' + new Date()
                                                }
                                            ]}/>
                                        )}/>

                                        <Route path="/post/:id" component={() => (
                                            <FullPost title="Статья" createdAt={'' + new Date()}/>
                                        )}/>

                                        <Route path="*" component={NotFound}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
