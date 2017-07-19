import React from "react";
import io from "socket.io-client";

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: io(props.url),
            data: null
        };

    }

    componentDidMount() {
        this.state.socket.on("ackevent", data => {
            console.log("receive data:" + data);
            this.setState({ data: JSON.parse( data ) })
        });
    }

    sendMsg() {
        var jsonObject = {
            from: {
                userId: "575157d9afd1197c49fd7f51",
                "userName": "aa",
                "imgUrl": "https://file.mahoooo.com/res/file/201704014123953WL3948TMHRTC0LETYK6A713B0EF4AE56FA12096CD60B77E299D9D9",
                "website": "575157d9afd1197c49fd7f51",
                "description": "description"
            },
            to: {
                userId: "57515612afd1197c49fd7f50",
                "userName": "fengzt",
                "imgUrl": "https://file.mahoooo.com/res/file/201704014123953WL3948TMHRTC0LETYK6A713B0EF4AE56FA12096CD60B77E299D9D9",
                "website": "57515612afd1197c49fd7f50",
                "description": "description"
            },
            title: "文章标题",
            resurl: "跳转URL",
            content: "aa"
        };
        this.state.socket.emit('ackevent', JSON.stringify(jsonObject), function (arg1, arg2) {
            console.log("ack from server! arg1: " + arg1 + ", arg2: " + arg2);
        });
    }


    render() {
        return (
            <div>
                <div className="chat-content">
                    <span className="username-msg">{this.state.data == null ? "" : this.state.data.from.userName}</span>
                    <span className="content">{this.state.data == null ? "" : this.state.data.content}</span>
                </div>
                <div className="chat-send">
                    <button type="button" onClick={this.sendMsg.bind(this)}>send</button>
                </div>
            </div>
        )
    }
}

export default Chat;