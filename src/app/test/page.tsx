import Image from 'next/image'
import { abc } from '@/types/common'
import Link from 'next/link'
import React from 'react'

const abcd: abc = {
  a: 'aaabbbccc',
  b: true,
}

function TestPage() {
  return (
    <>
      <div className={`m-[100px] justify-items-center`}>
        테스트페이지
        <Image src={'/next.svg'} width={180} height={37} alt={''} />
        {abcd.a}
      </div>
      <div className={'m-[100px] justify-text-center'}>
        <Link href={'/'}>back to home</Link>
      </div>
    </>
  )
}

export default React.memo(TestPage)
