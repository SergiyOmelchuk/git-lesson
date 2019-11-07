import React from 'react';
import s from "./Paginator.module.css";


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
            <div className={s.paginationItems}>
                {pages.map((p) => {
                    return <p className={s.item}>
                        <span onClick={(e) => props.onPageChanged(p)}
                              className={props.currentPage === p && s.selected}>
                            {p}
                        </span>
                    </p>
                })}
            </div>
    )

};

export default Paginator;