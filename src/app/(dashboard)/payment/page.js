"use client"
import { Box, Button, FormControl, OutlinedInput, Step, StepConnector, StepIcon, StepLabel, Stepper, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import UserIcon from "../../../assets/payment/useIcon.svg";
import UserSimple from "../../../assets/payment/userSimple.svg";
import Location from "../../../assets/payment/location.svg";
import LocationSimple from "../../../assets/payment/locationSimple.svg";
import Cart from "../../../assets/payment/cart.svg";
import CartSimple from "../../../assets/payment/cartSimple.svg";
import Done from "../../../assets/payment/done.svg";
import DoneSimple from "../../../assets/payment/doneSimple.svg";
import { makeStyles, withStyles } from '@mui/styles';
import PersonalDetails from '@/components/payment/PersonalDetails';
import PaymentMethod from '@/components/payment/PaymentMethod';
import TaxForm from '@/components/payment/TaxForm';
import DonePage from '@/components/payment/DonePage';
import { getWindowWidth } from '@/utils';
import Transaction from '@/components/payment/Transaction';

const steps = [{
  "label": "Step 1/4",
  "name": "Personal Information"
}, {
  "label": "Step 2/4",
  "name": "Payment Method"
}, {
  "label": "Step 3/4",
  "name": "Tax Forms"
}, {
  "label": "Step 4/4",
  "name": "Done"
}];



const Payments = () => {
  const [value, setValue] = useState('Account Details');
  const [activeStep, setActiveStep] = useState(0);

  const isMobile = getWindowWidth();
  const orientation = isMobile > 763 ? "vertical" : "horizontal";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNextPaymentMethod = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNextTaxForm = () => {
    setActiveStep(activeStep + 1)
  }

  const handleNextDonepage = () => {
    setActiveStep(activeStep + 1)
  }

  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return activeStep === 0 ? <Image src={UserIcon} alt="user" /> : <Image src={UserSimple} alt="user" />;
      case 1:
        return activeStep === 1 ? <Image src={Location} alt="location" /> : <Image src={LocationSimple} alt="location" />;
      case 2:
        return activeStep === 2 ? <Image src={Cart} alt="Cart" /> : <Image src={CartSimple} alt="location" />;
      case 3:
        return activeStep === 3 ? <Image src={Done} alt="done" /> : <Image src={DoneSimple} alt="location" />;
      default:
        return null;
    }
  };

  return (
    <div className='p-10 w-full'>
      <p className='font-inter font-medium text-[16px] '>Payment Details</p>
      <Box className="w-[100%] flex justify-between">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="Account Details" label="Account Details" className='text-[#262626] dark:text-white font-inter font-medium text-[14px] capitalize' />
          <Tab value="Transactions" label="Transactions" className='text-[#262626] dark:text-white font-inter font-medium text-[14px] capitalize' />
        </Tabs>
        {value === "Transactions" && <Button variant="outlined" className='text-[#262626] dark:text-white font-sans font-normal text-[14px] border-[#D9D9D9] capitalize'>Export</Button>}

      </Box>
      {
        value === "Account Details" && (
          <div className='w-full relative bg-white dark:bg-[#1E1E1E] px-[0px] my-[31px]'>
            <div className='w-full flex-col md:flex-row flex border border-[#EFEFEF] p-[16px] rounded-lg'>
              <div className='border bg-[#FAFAFA] dark:bg-[#1E1E1E] border-[#EFEFEF] flex flex-col md:flex-row items-center p-[8px] md:p-[16px] rounded-lg md:w-[35%] w-full '>
                <Stepper
                  activeStep={activeStep}
                  orientation={orientation}
                >
                  {steps.map((label, index) => (
                    <Step key={index}>
                      {
                        isMobile > 763 ?
                          <StepLabel className='text-[#1D2630] dark:text-white text-[14px] font-medium font-inter' icon={getStepIcon(index)}>
                            <p className='text-[#5B6B79] text-[12px] font-inter '>{label.label}</p>
                            <p className="text-[#1D2630] dark:text-white" >{label.name}</p>
                          </StepLabel>
                          :
                          <StepLabel className='text-[#1D2630] dark:text-white text-[14px] font-medium font-inter' icon={getStepIcon(index)}>
                          </StepLabel>
                      }


                    </Step>
                  ))}
                </Stepper>
              </div>
              {
                activeStep === 0 &&
                <PersonalDetails
                  handleNextPaymentMethod={handleNextPaymentMethod}

                />
              }
              {activeStep === 1 &&
                <PaymentMethod
                  handlePrev={handlePrev}
                  handleNextTaxForm={handleNextTaxForm}
                />
              }
              {
                activeStep === 2 &&
                <TaxForm
                  handlePrev={handlePrev}
                  handleNextDonepage={handleNextDonepage}
                />
              }
              {
                activeStep === 3 &&
                <DonePage
                  handlePrev={handlePrev}
                />
              }
            </div>
          </div>
        )
      }
      {
        value === "Transactions" && (
          <Transaction />
        )
      }
    </div>
  )
}

export default Payments
