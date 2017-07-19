import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Profile from "../profile"
import BasicExample from "../routers/BasicExample"
import Chat from "./Chat"

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Profile name="fengzt" age={8}/>
        <BasicExample/>
        <Chat url="http://localhost:9093?userId=575157d9afd1197c49fd7f51"/>
    </div>
)

export default App