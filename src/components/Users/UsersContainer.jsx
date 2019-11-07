import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleIsFollowingProgress, unFollow,
} from "../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../redux/users-selectors";
import {compose} from "redux";


class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize);

        // this.props.setIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     this.props.setUsers(response.items);
        //     this.props.setTotalUsersCount(response.totalCount);
        //     this.props.setIsFetching(false);
        // });
    };

    onPageChanged = (pageNumber) => {
        const {setCurrentPage, getUsers, pageSize }  = this.props;
        setCurrentPage(pageNumber);
        getUsers(pageNumber, pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.setIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
        //     this.props.setUsers(response.items);
        //     this.props.setIsFetching(false);
        // });
    };

    render() {
        return <>
            <div>{this.props.isFetching ? <Preloader/> : null}</div>
            <Users
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                isFollowing={this.props.isFollowing}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>;

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    };
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         followed: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollowed: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// };

export default compose(
    connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleIsFollowingProgress,
    getUsers: requestUsers})
)(UsersContainer);

