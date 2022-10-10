import React from 'react'
import { clx } from '../helpers/clx'

export default function Tabs({
      tabOptions,
      classname,
      activeTab,
      onclick,
      children
}) {
      // const [activeTab, setActiveTab]=React.useState(1)
      const classes = clx(
            "w-full h-fit border-b-2 scrollbar-hide overflow-x-auto flex space-x-4",
            classname
      )
      return (
            <div className={classes}>
                  {tabOptions.map((tab, index) => <div key={tab} className={`${index+1 === activeTab && "border-b-2 border-primary-500  text-secondary-500 dark:text-secondary-100 font-semibold  z-40"} cursor-pointer py-2 px-4 text-secondary-300 w-fit whitespace-nowrap`} onClick={()=>onclick(index+1)}>{tab}</div>)}
            </div>
      )
}