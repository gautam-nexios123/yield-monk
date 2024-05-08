"use client"
import { Box, IconButton, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import Number1 from "../../../assets/mysites/number1.svg";
import Number2 from "../../../assets/mysites/number2.svg";
import Number3 from "../../../assets/mysites/number3.svg";
import Num1Com from "../../../assets/mysites/num1com.svg";
import Num2Sele from "../../../assets/mysites/num2sel.svg";
import Num3Sel from "../../../assets/mysites/num3sel.svg";
import Cover from "../../../assets/mysites/cover.png";
import Temp from "../../../assets/mysites/temp.png";
import ManageApps from '@/components/mysites/ManageApps';
import SiteSetting from '@/components/mysites/SiteSetting';
import SiteTable from '@/components/mysites/SiteTable';
import Image from 'next/image';
import AddSiteName from '@/components/mysites/AddSiteName';
import YeildMockCode from '@/components/mysites/YeildMockCode';
import Verify from '@/components/mysites/Verify';
import { useTheme } from 'next-themes';


const tableData = [
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
];

const cardData = [
  {
    "name": "Layout Editor",
    "status": "Active",
    "image": Cover
  },
  {
    "name": "Layout Editor",
    "status": "Active",
    "image": Cover
  },
  {
    "name": "Layout Editor",
    "status": "Active",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "Active",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "InActive",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "InActive",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "InActive",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "InActive",
    "image": Temp
  },
  {
    "name": "Layout Editor",
    "status": "InActive",
    "image": Temp
  }
]

const rowsPerPagedata = [5, 10, 15, 25];

const MySites = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [addFlag, setAddFlag] = useState(false);
  const [num1Comp, setNump1Comp] = useState(false);
  const [num2Comp, setNump2Comp] = useState(false);
  const [num3Comp, setNump3Comp] = useState(false);
  const [manageSiteFlag, setManageSiteFlag] = useState(false);
  const [value, setValue] = useState('Manage Apps');
  const [scriptValue, setScriptValue] = useState(`<script data-cfasync="false" type="text/javascript">(function(w, d) { var s = d.createElement('script'); s.src = '//cdn.adpushup.com/46125/adpushup.js'; s.crossOrigin='anonymous'; s.type = 'text/javascript'; s.async = true; (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s); w.adpushup = w.adpushup || {que:[]}; })(window, document);<\/script>`);
  const [scriptValueVerify, setScriptValueVerify] = useState(`yieldmonk.com, bf67f17dbf784c25a173f79d7d8efd45, DIRECT, b0b8ff8485794fdd
  MANAGERDOMAIN=yieldmonk.com
  OWNERDOMAIN=sitename.com`);
  const [scriptValueVerify1, setScriptValueVerify1] = useState(`#--------------------------------Yield Monk Start------------------------------------------#
  # VERSION 5.11
  # Last updated:10/02/2024
  # Yield Monk Ads.txt`);
  const [scriptValueSetting, setScriptValueSetting] = useState(`<script data-cfasync="false" type="text/javascript">(function(w, d) { var s = d.createElement('script'); s.src = '//cdn.adpushup.com/46125/adpushup.js'; s.crossOrigin='anonymous'; s.type = 'text/javascript'; s.async = true; (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s); w.adpushup = w.adpushup || {que:[]}; })(window, document);<\/script>`);
  const { theme } = useTheme();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const totalPages = Math.ceil(tableData?.length / rowsPerPage);



  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value)
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };



  // copied function
  const handleCopyCode = () => {
    navigator.clipboard.writeText(scriptValue)
      .then(() => {
        console.log('Script code copied to clipboard', scriptValue);
        // Optionally, you can provide user feedback here
      })
      .catch(err => {
        console.error('Failed to copy script code: ', err);
        // Optionally, you can provide error feedback here
      });
  };

  // handleCopyCodeVerify1
  const handleCopyCodeVerify1 = () => {
    navigator.clipboard.writeText(scriptValueVerify)
      .then(() => {
        console.log('Script code copied to clipboard', scriptValueVerify);
        // Optionally, you can provide user feedback here
      })
      .catch(err => {
        console.error('Failed to copy script code: ', err);
        // Optionally, you can provide error feedback here
      });
  };

  // handleCopyCodeVerify2
  const handleCopyCodeVerify2 = () => {
    navigator.clipboard.writeText(scriptValueVerify1)
      .then(() => {
        console.log('Script code copied to clipboard', scriptValueVerify1);
        // Optionally, you can provide user feedback here
      })
      .catch(err => {
        console.error('Failed to copy script code: ', err);
        // Optionally, you can provide error feedback here
      });
  };

  // handleCopyCodeVerify2
  const handleCopyCodeVerifySetting = () => {
    navigator.clipboard.writeText(scriptValueSetting)
      .then(() => {
        console.log('Script code copied to clipboard', scriptValueSetting);
        // Optionally, you can provide user feedback here
      })
      .catch(err => {
        console.error('Failed to copy script code: ', err);
        // Optionally, you can provide error feedback here
      });
  };



  return (
    <div className='w-full'>
      {addFlag ?
        <div className='p-6 w-full'>
          <div className='bg-[#FAFAFA] dark:bg-transparent da h-auto rounded-lg p-6'>
            <div className='flex'>
              <IconButton aria-label="back" onClick={() => setAddFlag(false)}>
                <WestIcon style={{ color: theme === 'dark' ? '#fff' : '#333' }} />
              </IconButton> <p className='text-[#1D2630] dark:text-white font-inter text-[20px] font-semibold mt-1'>Add New Site</p>
            </div>
            <div className='w-full  relative bg-white dark:bg-transparent px-[0px] my-[31px]'>
              <div className='w-full border  border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className='w-full flex-col bg-[#FAFAFA] dark:bg-transparent  md:flex-row flex gap-5 border border-[#EFEFEF] p-[16px] rounded-lg'>
                  <div className={`border ${num1Comp ? "bg-white dark:bg-transparent" : "bg-white dark:bg-transparent"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row items-center p-[8px] md:p-[20px] rounded-lg  md:w-[35%] w-full `}>
                    <Image src={num1Comp ? Num1Com : Number1} alt='number1' />
                    <div>
                      <p className={`text-[12px] font-normal ${num1Comp ? "text-[#5B6B79]" : "text-[#4680FF]"} font-inter`}>Step 1/3</p>
                      <p className={`font-inter font-medium text-[14px]  ${num1Comp ? "text-[#2CA87F]" : "text-[#1D2630] dark:text-white"} `}>Add Site Name</p>
                    </div>
                  </div>
                  <div className={`border ${num1Comp ? "bg-white dark:bg-transparent" : "bg-[#FAFAFA] dark:bg-transparent"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row  items-center p-[8px] md:p-[20px] rounded-lg md:w-[35%] w-full `}>
                    <Image src={num1Comp ? num2Comp ? Num1Com : Num2Sele : Number2} alt='number2' />
                    <div>
                      <p className={`text-[12px] font-normal ${num1Comp ? num2Comp ? "text-[#5B6B79]" : "text-[#4680FF]" : "text-[#5B6B79]"} font-inter`}>Step 2/3</p>
                      <p className={`font-inter font-medium text-[14px] ${num2Comp ? "text-[#2CA87F]" : "text-[#1D2630]  dark:text-white"}`}>Install Yield Monk Code</p>
                    </div>
                  </div>
                  <div className={`border ${num2Comp ? "bg-white dark:bg-transparent" : "bg-[#FAFAFA] dark:bg-transparent"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row  items-center p-[8px] md:p-[20px] rounded-lg md:w-[35%] w-full `}>
                    <Image src={num2Comp ? num3Comp ? Num1Com : Num3Sel : Number3} alt='number3' />
                    <div>
                      <p className={`text-[12px] font-normal ${num2Comp ? num3Comp ? "text-[#5B6B79]" : "text-[#4680FF]" : "text-[#5B6B79]"}  font-inter`}>Step 3/3</p>
                      <p className={`font-inter font-medium text-[14px] ${num3Comp ? "text-[#2CA87F]" : "text-[#1D2630]  dark:text-white"} `}>Verify Ads.txt</p>
                    </div>
                  </div>
                </div>

                {num1Comp === false ?
                  <AddSiteName setNump1Comp={setNump1Comp} setAddFlag={setAddFlag} />
                  :

                  num2Comp === false ?
                    <YeildMockCode
                      setScriptValue={setScriptValue}
                      scriptValue={scriptValue}
                      handleCopyCode={handleCopyCode}
                      setNump2Comp={setNump2Comp}
                      setNump1Comp={setNump1Comp} />
                    :
                    <Verify
                      scriptValueVerify={scriptValueVerify}
                      setScriptValueVerify={setScriptValueVerify}
                      handleCopyCodeVerify1={handleCopyCodeVerify1}
                      scriptValueVerify1={scriptValueVerify1}
                      setScriptValueVerify1={setScriptValueVerify1}
                      handleCopyCodeVerify2={handleCopyCodeVerify2}
                      setNump2Comp={setNump2Comp}
                      setNump3Comp={setNump3Comp}
                    />
                }


              </div>
            </div>
          </div>
        </div>
        : manageSiteFlag ?
          <div className='px-[36px] py-[35px]'>
            <p className='text-[16px] font-inter font-medium'>Manage Site</p>
            <Box className="w-[100%] flex justify-between">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                <Tab value="Manage Apps" label="Manage Apps" className='font-inter font-medium text-[14px] text-[#1D2630] dark:text-white capitalize' />
                <Tab value="Site Setting" label="Site Setting" className='font-inter font-medium text-[14px] text-[#1D2630] dark:text-white capitalize' />
              </Tabs>

            </Box>
            {value === "Manage Apps" &&
              <ManageApps cardData={cardData} />
            }
            {value === "Site Setting" &&
              <SiteSetting
                scriptValueSetting={scriptValueSetting}
                setScriptValueSetting={setScriptValueSetting}
                handleCopyCodeVerifySetting={handleCopyCodeVerifySetting}
                setNump2Comp={setNump2Comp}
                setNump3Comp={setNump3Comp}
                setManageSiteFlag={setManageSiteFlag}
              />
            }
          </div>
          :
          <SiteTable
            currentPage={currentPage}
            tableData={tableData}
            rowsPerPagedata={rowsPerPagedata}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handlePageChange={handlePageChange}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            setManageSiteFlag={setManageSiteFlag}
            setAddFlag={setAddFlag}
          />
      }
    </div>
  )
}

export default MySites
