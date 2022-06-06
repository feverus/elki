import * as React from 'react'
import Link from 'next/link'

const LinkToIndex = () => {
    return (    
        <div className='to-index'>
            <Link href="/">            
                    <a>На главную</a>            
            </Link> 
        </div>   
    )
}
export default LinkToIndex