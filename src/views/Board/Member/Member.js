import React from 'react'

export const Member = ({member}) => {
    return (
        <div class="member">
            <span>{member.name}</span>
        </div>
    );
}

export default Member;
