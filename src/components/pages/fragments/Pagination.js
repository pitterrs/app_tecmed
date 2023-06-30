import React from "react";
import Pagination from 'react-bootstrap/Pagination';
import '../../../Styles/Pagination.css'

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Paginations = ({ limit, total, offset, setOffset }) =>{
    
    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst) ;

    function onPageChange(page){
        setOffset((page - 1) * limit);
    }

    return(
        <ul className="pagination">
            <li><Pagination.First onClick={() => onPageChange(current - 1)}
                disabled={current === 1}
            />
            </li>
            {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => index + first ).map((page) => (
                <li key={page}>
                    <Pagination.Item disabled={current === page} onClick={() => onPageChange(page)} 
                    className={page === current ? 'pagination__item--active pageitem' : 'pageitem'}>{page}</Pagination.Item>
                </li>
            ))}
            <li>
                <Pagination.Last onClick={() => onPageChange(current + 1)}
                disabled={current === pages}/>
            </li>
        </ul>
    )
};

export default Paginations;