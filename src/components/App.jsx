import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Profile from "../profile"
import BasicExample from "../routers/BasicExample"

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Profile name="fengzt" age={8} />
        <BasicExample/>
    </div>
)

export default App