import clsx from 'clsx'
import React from 'react'

export default function CustomContainer({children,customClass}) {
  return <div className={clsx("custom-container 2xl:px-24 xl:px-14 lg:px-13 md:px-11 px-6", customClass)}>{children}</div>;
}
