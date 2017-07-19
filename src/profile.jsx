import React, {PropTypes} from "react";
import Hobby from "./hobby"

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liked : 0,
            hobbies : ["react", "java"]
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }

    addHobbyCallback() {
        // 用this.refs.name来取得DOM节点
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if (val) {
            let hobbies = this.state.hobbies;
            // 添加值到数组
            hobbies = [...hobbies, val];
            // 更新state, 刷新UI
            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            });
        }
    }

    // render是这个组件渲染的Vitrual DOM结构
    render() {
        return (
            <div className="profile-component">
                <h1>name: {this.props.name}</h1>
                <h2>aa:{this.props.age}</h2>
                <button onClick={this.likedCallback}>点赞</button>
                <div>{this.state.liked}</div>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}

                </ul>

                <input type="text" ref="hobby" />
                <button onClick={this.addHobbyCallback}>添加爱好</button>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default Profile;