import React, { Component } from 'react';
import { RenderAvatar } from '../components/app/detail/avatarDetail';
import { fetchAvatar } from '../services/avatarApi';

class Avatar extends Component {
    state = {
        loading: true,
        characters: [],
    }
    componentDidMount = async () => {
        const characters = await fetchAvatar();
        this.setState({characters, loading: false })
    }

    render(){
        const { loading } = this.state;
        if (loading) return <h1>Loading...</h1>
        return (
            <>
                <RenderAvatar avatar={this.state.characters} />
            </>
        )
    }
}
export default Avatar;