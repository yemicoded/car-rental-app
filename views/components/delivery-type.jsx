import React from 'react'
import { BiSortAlt2 } from 'react-icons/bi';
import { IconButton } from '../../components/button';
import RadioButton from '../../components/radio-button';
import SmallSelect from '../../components/small-select';
import { clx } from '../../helpers/clx';

export default function DeliveryType() {
      const classes = clx(
        "py-4 flex flex-col lg:flex-row gap-6 items-center relative"
      );
      return (
        <div className={classes}>
          <div className='lg:flex-1 w-full px-4 lg:px-6 py-4 h-fit rounded-xl bg-white dark:bg-black flex flex-col lg:items-center'>
            <div>
              <RadioButton
                label='Pick - up'
                name='delivery-type'
                classname='justify-self-start place-self-start'
              />
              <div className='py-2 flex gap-2 justify-between'>
                <SmallSelect
                  label='Locations'
                  placeholder='Select your city'
                  options={["Option1", "Option2", "Option3"]}
                />
                <SmallSelect
                  label='Date'
                  placeholder='Select your date'
                  options={["Option1", "Option2", "Option3"]}
                  borderX
                />
                <SmallSelect
                  label='Time'
                  placeholder='Select your time'
                  options={["Option1", "Option2", "Option3"]}
                />
              </div>
            </div>
          </div>
          <IconButton
            icon={<BiSortAlt2 />}
            classname='w-[60px] text-3xl shadow-lg p-2 h-[60px] absolute lg:relative top-[50%] lg:top-0 translate-y-[-50%] lg:translate-y-0'
          />
          <div className='lg:flex-1 w-full px-4 lg:px-6 py-4 h-fit rounded-xl bg-white dark:bg-black flex flex-col lg:items-center'>
            <div>
              <RadioButton
                label='Drop - off'
                name='delivery-type'
                classname='justify-self-start place-self-start'
              />
              <div className='py-2 flex gap-2 justify-between'>
                <SmallSelect
                  label='Locations'
                  placeholder='Select your city'
                  options={["Option1", "Option2", "Option3"]}
                />
                <SmallSelect
                  label='Date'
                  placeholder='Select your date'
                  options={["Option1", "Option2", "Option3"]}
                  borderX
                />
                <SmallSelect
                  label='Time'
                  placeholder='Select your time'
                  options={["Option1", "Option2", "Option3"]}
                />
              </div>
            </div>
          </div>
        </div>
      );
}