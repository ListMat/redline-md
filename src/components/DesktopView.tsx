"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DesktopView() {
  return (
    <div className="w-full flex justify-center bg-[#08080A]">
      <div className="w-[1440px] shrink-0">
        <div
      data-pencil-name="RedlineMD — Desktop v2"
      className="box-border w-[1440px] h-fit flex flex-col gap-0 justify-start items-start bg-[#08080A] overflow-hidden"
    >
      <div
        data-pencil-name="Nav"
        className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[20px_100px] justify-between items-center bg-[#08080A]"
      >
        <div
          data-pencil-name="Brand"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[9px] justify-start items-center"
        >
          <div
            data-pencil-name="Wordmark"
            className="text-[20px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.6px] text-left [white-space:nowrap]"
          >
            REDLINE
          </div>
          <div
            data-pencil-name="Wordmark MD"
            className="text-[20px]/[normal] box-border text-[#E03A2F] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.6px] text-left [white-space:nowrap]"
          >
            MD
          </div>
        </div>
        <div
          data-pencil-name="Nav Links"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center"
        >
          <div
            data-pencil-name="Nav Link Platform"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[9px_14px] justify-start items-start rounded-[8px]"
          >
            <div
              data-pencil-name="Platform"
              className="text-[13.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              Platform
            </div>
          </div>
          <div
            data-pencil-name="Nav Link How it works"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[9px_14px] justify-start items-start rounded-[8px]"
          >
            <div
              data-pencil-name="How it works"
              className="text-[13.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              How it works
            </div>
          </div>
          <div
            data-pencil-name="Nav Link Pricing"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[9px_14px] justify-start items-start rounded-[8px]"
          >
            <div
              data-pencil-name="Pricing"
              className="text-[13.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              Pricing
            </div>
          </div>
          <div
            data-pencil-name="Nav Link FAQ"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[9px_14px] justify-start items-start rounded-[8px]"
          >
            <div
              data-pencil-name="FAQ"
              className="text-[13.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              FAQ
            </div>
          </div>
        </div>
        <div
          data-pencil-name="Nav Actions"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 450, damping: 18 }} 
            data-pencil-name="Login Btn"
            className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[9px_14px] justify-start items-start [outline:1px_solid_#FFFFFF14] [outline-offset:-0.5px] rounded-[999px]"
          >
            <div
              data-pencil-name="Login Label"
              className="text-[13px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              Log in
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -1, boxShadow: "0px 8px 20px rgba(224, 58, 47, 0.4)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} 
            data-pencil-name="Nav CTA"
            className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[10px_18px] justify-start items-start bg-[#FFFFFF] rounded-[999px]"
          >
            <div
              data-pencil-name="Nav CTA Label"
              className="text-[13px]/[normal] box-border text-[#08080A] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
            >
              Get started
            </div>
          </motion.div>
        </div>
      </div>
      <div
        data-pencil-name="Hero"
        className="box-border w-full h-fit shrink-0 flex flex-col gap-[28px] p-[92px_100px_28px_100px] justify-start items-center"
      >
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Hero Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="Hero Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            PHYSICIAN CONTRACT REVIEW
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Hero Headline"
          className="text-[62px]/[66px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-2.4px] text-center"
        >
          The $10,000 clause
          <br />
          on page 14.
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Hero Sub"
          className="text-[17px]/[27px] box-border w-[650px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-center"
        >
          RedlineMD reads every clause of your employment agreement and returns a redline with the
          financial exposure spelled out — in under 24 hours, for a flat $199.
        </motion.div>
        <div
          data-pencil-name="Hero CTA Row"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[18px] p-[10px_0px] justify-start items-center"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 12px 30px rgba(224, 58, 47, 0.45)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} 
            data-pencil-name="Hero CTA"
            className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-[14px] p-[8px_8px_8px_22px] justify-start items-center [background-image:linear-gradient(180deg,_#FF6448_0%,_#D42A20_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[999px]"
          >
            <div
              data-pencil-name="Hero CTA Label"
              className="text-[14.5px]/[normal] box-border text-[#FFFFFF] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
            >
              Review my contract
            </div>
            <div
              data-pencil-name="Hero CTA Chevron"
              className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF38] rounded-[999px]"
            >
              <svg
                data-pencil-name="Hero CTA Icon"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[14px] shrink-0 h-[14px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </motion.div>
          <div
            data-pencil-name="Hero CTA Note"
            className="box-border w-fit shrink-0 h-fit flex flex-col gap-[2px] p-[0px_0px_0px_4px] justify-center items-start"
          >
            <div
              data-pencil-name="Hero CTA Note 0"
              className="text-[11.5px]/[16px] box-border text-[#C9CCD2] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              24-hour turnaround
            </div>
            <div
              data-pencil-name="Hero CTA Note 1"
              className="text-[11.5px]/[16px] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              No subscription required
            </div>
          </div>
        </div>
        <div
          data-pencil-name="Hero Social Proof"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[12px] p-[10px_0px_0px_0px] justify-start items-center"
        >
          <div
            data-pencil-name="Hero Stars"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[3px] justify-start items-center"
          >
            <svg
              data-pencil-name="Hero Star 0"
              data-icon-name="star-fill"
              data-icon-set="phosphor"
              viewBox="0 0 14 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <svg
              data-pencil-name="Hero Star 1"
              data-icon-name="star-fill"
              data-icon-set="phosphor"
              viewBox="0 0 14 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <svg
              data-pencil-name="Hero Star 2"
              data-icon-name="star-fill"
              data-icon-set="phosphor"
              viewBox="0 0 14 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <svg
              data-pencil-name="Hero Star 3"
              data-icon-name="star-fill"
              data-icon-set="phosphor"
              viewBox="0 0 14 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <svg
              data-pencil-name="Hero Star 4"
              data-icon-name="star-fill"
              data-icon-set="phosphor"
              viewBox="0 0 14 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                fill="#FF6A5A"
              ></path>
            </svg>
          </div>
          <div
            data-pencil-name="Hero Proof Text"
            className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
          >
            4.9 / 5 · 2,989+ contracts reviewed by 312 physicians
          </div>
        </div>
      </div>
      <div
        data-pencil-name="Product Shot"
        className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[40px_100px_0px_100px] justify-center items-start bg-[#08080A]"
      >
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="App Mockup"
          className="box-border w-[1240px] shrink-0 h-[560px] [box-shadow:0px_32px_80px_#000000B3] flex flex-row gap-0 justify-start items-start bg-[#0B0C0F] [outline:1px_solid_#262A31] [outline-offset:-0.5px] rounded-[18px] overflow-hidden"
        >
          <div
            data-pencil-name="Sidebar"
            className="[box-sizing:content-box] w-[195.5px] shrink-0 h-[560px] flex flex-col gap-[4px] p-[16px_12px] justify-between items-start bg-[#090A0C] [border-width:0px_1px_0px_0px] [border-style:solid] [border-color:#1A1D22] [margin:0px_-0.5px_0px_0px]"
          >
            <div
              data-pencil-name="Sidebar Top"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[14px] justify-start items-start"
            >
              <div
                data-pencil-name="Sidebar Brand"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] p-[4px_8px] justify-start items-center"
              >
                <div
                  data-pencil-name="Sidebar Wordmark"
                  className="text-[14px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.4px] text-left [white-space:nowrap]"
                >
                  REDLINE
                </div>
                <div
                  data-pencil-name="Sidebar Wordmark MD"
                  className="text-[14px]/[normal] box-border text-[#E03A2F] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.4px] text-left [white-space:nowrap]"
                >
                  MD
                </div>
              </div>
              <div
                data-pencil-name="Sidebar Nav"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[2px] justify-start items-start"
              >
                <div
                  data-pencil-name="Nav Item Overview"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[8px_9px] justify-start items-center bg-[#FFFFFF10] rounded-[7px]"
                >
                  <svg
                    data-pencil-name="Nav Icon Overview"
                    data-icon-name="layout-dashboard"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M2.03027 1.20313q-0.22559 0.07178-0.42724 0.23242-0.20166 0.16064-0.30078 0.36914l-0.02735 0.04443q-0.05811 0.10938-0.07177 0.2085-0.02734 0.14014-0.02735 0.56054l0 3.51368q0 0.42041 0.02735 0.56054 0.01367 0.09912 0.07177 0.2085l0.02735 0.04443q0.09912 0.22217 0.30761 0.38282 0.2085 0.16064 0.44776 0.21875 0.11279 0.04102 1.72949 0.03417 1.6167-0.00684 1.74316-0.03417 0.29395-0.07178 0.53321-0.30762 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-4.46386-0.04102-0.12647q-0.04443-0.16748-0.11621-0.27344-0.06836-0.10596-0.1914-0.23242-0.15381-0.15381-0.29395-0.22217l-0.01709-0.01367q-0.12305-0.05811-0.22217-0.07177-0.12646-0.02734-0.47509-0.02735l-1.14844 0-1.52783 0q-0.24951 0.01367-0.34864 0.02735z m6.43946-0.00001q-0.28027 0.05811-0.53321 0.30762-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 2.15332 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028l0.01709 0.01367q0.13672 0.07178 0.22217 0.08545 0.14014 0.01367 0.48877 0.02734l2.92578-0.01367 0.14013-0.04102q0.2666-0.08545 0.46827-0.28711 0.20508-0.20508 0.29052-0.45459 0.02734-0.08545 0.02735-0.25293l0.01367-0.95361 0-0.86816q0-0.23584-0.02735-0.34864-0.01367-0.07178-0.08544-0.21191l-0.01368-0.01367q-0.09912-0.22217-0.30078-0.37598-0.20166-0.15381-0.44092-0.22559-0.09912-0.02734-0.33496-0.02734l-1.41504 0q-1.62354 0-1.73632 0.02734z m-3.21973 3.16504l0 2.05762-2.92578 0 0-4.10156 2.92578 0 0 2.04394z m6.42578-1.16211l0 0.86817-2.92578 0 0-1.75 2.92578 0 0 0.88183z m-3.20605 3.24707q-0.28027 0.05811-0.53321 0.30762-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 4.46386 0.04102 0.12647q0.04443 0.16748 0.11279 0.27344 0.07178 0.10596 0.19482 0.23242 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 1.74316 0.03418 1.6167 0.00684 1.72949-0.03418 0.30762-0.07178 0.54346-0.30761 0.23926-0.23926 0.31104-0.54688 0.02734-0.11279 0.03417-2.31738 0.00684-2.20459-0.03417-2.31738-0.07178-0.30762-0.3042-0.53662-0.229-0.23242-0.53663-0.31788-0.09912-0.02734-0.33496-0.02734l-1.41504 0q-1.62354 0-1.73632 0.02734z m3.20605 3.16504l0 2.05762-2.92578 0 0-4.10156 2.92578 0 0 2.04394z m-9.54639-0.85449q-0.31104 0.05469-0.56396 0.27344-0.24951 0.21533-0.34863 0.50928-0.02734 0.08545-0.02735 0.25293l-0.01367 0.95361 0 0.86816q0 0.23584 0.02735 0.34864 0.01367 0.07178 0.08544 0.21191l0.01368 0.01367q0.09912 0.22217 0.30761 0.38281 0.2085 0.16065 0.44776 0.21875 0.11279 0.04102 1.72949 0.03418 1.6167-0.00684 1.74316-0.03418 0.29395-0.07178 0.53321-0.30761 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-2.15332-0.04102-0.14013q-0.08545-0.22559-0.24609-0.40674-0.16064-0.18115-0.35547-0.28028l-0.01709-0.01367q-0.12305-0.05811-0.22217-0.08545-0.14014-0.01367-0.48877-0.02734l-1.26123 0q-1.55518 0-1.65088 0.01367z m3.12061 2.03028l0 0.88183-2.92578 0 0-1.75 2.92578 0 0 0.86817z"
                      fill="#F6F5F3"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Nav Label Overview"
                    className="text-[12px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Overview
                  </div>
                </div>
                <div
                  data-pencil-name="Nav Item Contracts"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[8px_9px] justify-start items-center bg-[#00000000] rounded-[7px]"
                >
                  <svg
                    data-pencil-name="Nav Icon Contracts"
                    data-icon-name="file-text"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-5.31836 1.66455q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.18115 0.42041 0.08545 0.08203 0.15381 0.11279 0.07178 0.02734 0.25293 0.04102 0.12646 0 0.57422 0 0.44775 0 0.57422 0 0.18115-0.01367 0.24951-0.04102 0.07178-0.03076 0.15723-0.11279 0.18115-0.18115 0.18115-0.42041 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.72803 0q-0.72803 0-0.78271 0.02734z m0.04101 2.31055q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.38623 0.1333 0.16748 0.35547 0.2085 0.09912 0.02734 2.43701 0.02734 2.33789 0 2.43701-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-2.43701-0.01367q-2.45068 0-2.51905 0.01367z m0.05469 2.32422q-0.29395 0.05469-0.42725 0.32129-0.12988 0.2666-0.00683 0.5332 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 4.95606 0 0.09912-0.04102q0.08203-0.04443 0.15722-0.11279 0.07861-0.07178 0.1128-0.14014 0.0376-0.07178 0.05127-0.18115 0.04102-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-2.40967 0q-2.39258 0-2.47803 0z"
                      fill="#6B6F76"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Nav Label Contracts"
                    className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                  >
                    Contracts
                  </div>
                </div>
                <div
                  data-pencil-name="Nav Item Risk flags"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[8px_9px] justify-start items-center bg-[#00000000] rounded-[7px]"
                >
                  <svg
                    data-pencil-name="Nav Icon Risk flags"
                    data-icon-name="shield-alert"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M6.84619 0.60156q-0.34863 0.02734-0.68701 0.30762-0.51611 0.42041-1.00147 0.70068-0.48193 0.28027-1.01513 0.4751-0.30762 0.11279-0.58789 0.1709-0.28027 0.05469-0.66992 0.08203-0.23926 0.01367-0.36573 0.07178-0.19482 0.06836-0.37939 0.22217-0.18115 0.15381-0.26319 0.34863l-0.01367 0.03076q-0.07178 0.12646-0.08545 0.22217-0.01367 0.15381-0.02734 0.60156l0 1.78076q0 2.25244 0.01367 2.46094 0.14014 1.6543 1.10742 2.88477 0.14014 0.16748 0.43409 0.46142 0.29395 0.29394 0.48877 0.44775 0.92285 0.7417 2.2832 1.27491 0.46143 0.18115 0.65625 0.23926 0.23926 0.05469 0.43408 0.01367 0.16748-0.02734 0.5332-0.15381 1.35693-0.51953 2.27979-1.20313 0.37939-0.2666 0.71435-0.60498 1.37402-1.3706 1.54151-3.37353 0.01367-0.23584 0.01367-2.46094 0-2.22852-0.02734-2.35498-0.07178-0.32129-0.31787-0.56396-0.24268-0.24609-0.5503-0.31788-0.09912-0.02734-0.37939-0.04101-0.48877-0.02734-0.96387-0.18115-0.81348-0.2666-1.55518-0.77246-0.2666-0.18115-0.64257-0.48877-0.42041-0.33496-0.96729-0.28028z m0.43408 1.34326q0.64258 0.51953 1.32959 0.86817 1.2168 0.61865 2.25244 0.68701l0.21192 0-0.01367 4.31348q0 0.33496-0.02735 0.50244-0.22559 1.34326-1.1416 2.27637-0.91602 0.92969-2.66601 1.57226l-0.21192 0.08545-0.18115-0.05469q-2.32422-0.85449-3.2334-2.22851-0.47852-0.71436-0.63232-1.63721-0.02734-0.18115-0.02735-0.50244l-0.01367-4.32715 0.19483 0q0.86816-0.05469 1.84912-0.48193 0.98096-0.42725 1.83545-1.12793 0.16748-0.14014 0.19482-0.14014 0.02734 0 0.28027 0.19482z m-0.37939 2.15674q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.25634l0 2.46436 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-2.33789q0-0.2666-0.02051-0.3418-0.02051-0.07861-0.07861-0.16064l-0.01367-0.01367q-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z m-0.05469 4.67578q-0.2085 0.05811-0.32129 0.22559-0.11279 0.16748-0.09912 0.37256 0.01367 0.20166 0.15381 0.35547 0.08545 0.08203 0.15381 0.12646 0.21191 0.0957 0.42041 0.03418 0.2085-0.06494 0.33496-0.24609 0.12646-0.18115 0.08545-0.40674-0.01367-0.10938-0.05127-0.17773-0.03418-0.07178-0.11963-0.14014-0.08203-0.07178-0.16064-0.11279-0.0752-0.04443-0.19483-0.05127-0.11621-0.00684-0.20166 0.0205z"
                      fill="#6B6F76"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Nav Label Risk flags"
                    className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                  >
                    Risk flags
                  </div>
                </div>
                <div
                  data-pencil-name="Nav Item Negotiation"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[8px_9px] justify-start items-center bg-[#00000000] rounded-[7px]"
                >
                  <svg
                    data-pencil-name="Nav Icon Negotiation"
                    data-icon-name="pen-line"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.00244 0.60156q-0.61523 0.04102-1.14502 0.43408-0.15381 0.09912-4.13232 4.0879-3.9751 3.98877-4.08789 4.1289-0.14014 0.19824-0.23242 0.45801-0.08887 0.25635-0.44776 1.46289-0.35547 1.20313-0.36914 1.28516-0.01367 0.12646 0.02051 0.27343 0.03418 0.14697 0.08887 0.2461 0.05811 0.09912 0.17089 0.20507 0.11279 0.10254 0.2085 0.14698 0.09912 0.04102 0.22559 0.06836 0.12646 0.02734 0.229 0.01367 0.10596-0.01367 1.38086-0.39307l1.24756-0.38964q0.26318-0.08545 0.3623-0.12647l0.01367-0.01367q0.14014-0.07178 0.32129-0.22559 0.25293-0.23926 1.08008-1.04932l2.92578-2.92578q3.98877-3.99219 4.10156-4.14599 0.18115-0.24951 0.29395-0.51612 0.23926-0.60156 0.11963-1.23046-0.11963-0.63232-0.56738-1.10743-0.35205-0.36572-0.81348-0.54687-0.46143-0.18115-0.99463-0.14014z m0.42041 1.17578q0.28027 0.05811 0.50928 0.29053 0.23242 0.229 0.29053 0.50928 0.08203 0.37598-0.08545 0.71435-0.04102 0.06836-0.2085 0.24952-0.23926 0.25293-1.06641 1.09375l-2.77197 2.77197q-3.98877 3.98877-4.05371 4.02637-0.06152 0.03418-1.0835 0.34863-1.02197 0.31445-1.03564 0.30078-0.01367-0.01367 0.30078-1.03564 0.31445-1.02197 0.34863-1.0835 0.0376-0.06494 4.02637-4.05371l2.77197-2.7583q0.84082-0.84082 1.09375-1.08008 0.18115-0.16748 0.24952-0.2085 0.33838-0.16748 0.71435-0.08545z m-4.04346 9.92578q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 4.94238 0 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12646-0.16065 0.04443-0.07861 0.04444-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-4.64844 0q-0.33496 0.01367-0.38965 0.02734z"
                      fill="#6B6F76"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Nav Label Negotiation"
                    className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                  >
                    Negotiation
                  </div>
                </div>
                <div
                  data-pencil-name="Nav Item Report"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[8px_9px] justify-start items-center bg-[#00000000] rounded-[7px]"
                >
                  <svg
                    data-pencil-name="Nav Icon Report"
                    data-icon-name="chart-no-axes-column"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M6.84619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 10.83496 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-10.83496-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m4.03321 3.51368q-0.09912 0.04443-0.19141 0.12988-0.08887 0.08203-0.1333 0.16406l-0.04102 0.09912 0 7.30762 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0-7.25292-0.04102-0.1128q-0.09912-0.19482-0.29394-0.29394-0.08545-0.04102-0.21875-0.04102-0.1333 0-0.229 0.02734z m-8.14844 3.5q-0.23926 0.08545-0.35205 0.33837l-0.04102 0.08204 0 3.75292 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0-3.80762-0.04102-0.09912q-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02735z"
                      fill="#6B6F76"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Nav Label Report"
                    className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                  >
                    Report
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Sidebar Bottom"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] p-[12px_10px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[9px]"
            >
              <div
                data-pencil-name="Sidebar Card Title"
                className="text-[11px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                30 pages included
              </div>
              <div
                data-pencil-name="Sidebar Card Body"
                className="text-[10px]/[15px] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Flat $199 · unlimited revisions
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Main"
            className="box-border [flex:1_1_0] h-full flex flex-col gap-[14px] p-[16px_18px] justify-start items-start"
          >
            <div
              data-pencil-name="Main Header"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
            >
              <div
                data-pencil-name="Main Title Block"
                className="box-border w-fit shrink-0 h-fit flex flex-col gap-[3px] justify-start items-start"
              >
                <div
                  data-pencil-name="Main Title"
                  className="text-[15px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Contract overview
                </div>
                <div
                  data-pencil-name="Main Subtitle"
                  className="text-[11px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Employment_Agreement_2026.pdf · reviewed 18h 42m ago
                </div>
              </div>
              <div
                data-pencil-name="Main Header Actions"
                className="box-border w-fit shrink-0 h-fit flex flex-row gap-[9px] justify-start items-center"
              >
                <div
                  data-pencil-name="Range Pill"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] p-[6px_11px] justify-start items-center [outline:1px_solid_#242A31] [outline-offset:-0.5px] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Range Label"
                    className="text-[10.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Last 24 hours
                  </div>
                  <svg
                    data-pencil-name="Range Icon"
                    data-icon-name="calendar"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[11px] shrink-0 h-[11px]"
                  >
                    <path
                      d="M4.57666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-1.32959 0.01367q-0.14014 0.01367-0.23926 0.02735-0.50244 0.14014-0.85449 0.50586-0.34863 0.3623-0.44776 0.88183-0.02734 0.0957-0.02734 0.81006l0 7.99463 0.05469 0.15381q0.15723 0.51953 0.56055 0.86133 0.40674 0.3418 0.93994 0.3999 0.15381 0.02734 4.26904 0.02734 4.11523 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-7.99463q0-0.71436-0.02735-0.81006-0.09912-0.51953-0.45117-0.88183-0.34863-0.36572-0.85107-0.50586-0.09912-0.01367-0.23926-0.02735l-1.32959-0.01367 0-0.29395q0-0.32129-0.03418-0.45459-0.03418-0.1333-0.14697-0.24609-0.14014-0.14014-0.35889-0.16064-0.21533-0.02051-0.37597 0.09228-0.16064 0.10938-0.21875 0.29395-0.02734 0.05469-0.03418 0.1333-0.00684 0.0752-0.00684 0.30078l0 0.33496-3.5 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m-0.50244 2.67285q0.01367 0.25293 0.02051 0.31788 0.00684 0.06152 0.03418 0.14697 0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.05811 0.02051-0.32129l0-0.36572 3.5 0 0 0.36572q0.01367 0.26318 0.02051 0.32129 0.00684 0.05469 0.03418 0.14014 0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115 0.02734-0.08545 0.03418-0.14697 0.00684-0.06494 0.02051-0.31788l0-0.34863 1.31592 0 0.08545 0.04102q0.08203 0.04443 0.15722 0.12304 0.07861 0.0752 0.11963 0.16065 0.04443 0.08203 0.05811 0.28027 0.01367 0.19482 0.01367 0.85108l0 0.86816-9.35156 0 0.01367-1.72266q0.01367-0.16748 0.02734-0.20849 0.09912-0.2666 0.35206-0.36572 0.05469-0.01367 0.16748-0.02735l1.18945 0 0 0.34863z m7.58789 5.82422q0 1.89014-0.00684 2.30371-0.00683 0.41357-0.0205 0.45459-0.09912 0.25293-0.35206 0.35205l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.02734-0.02734q-0.04443-0.05469-0.05811-0.15381-0.02734-0.14014-0.02734-0.60156l-0.01367-4.80225 9.35156 0-0.01367 2.67285z"
                      fill="#6B6F76"
                    ></path>
                  </svg>
                </div>
                <div
                  data-pencil-name="Mock Avatar"
                  className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-start items-start bg-[#2A2E35] [outline:1px_solid_#333941] [outline-offset:-0.5px] rounded-[999px]"
                ></div>
              </div>
            </div>
            <div
              data-pencil-name="Stat Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-start items-start"
            >
              <div
                data-pencil-name="Stat Card Risk flags"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[12px_13px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
              >
                <div
                  data-pencil-name="Stat Label Risk flags"
                  className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Risk flags
                </div>
                <div
                  data-pencil-name="Stat Value Risk flags"
                  className="text-[22px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
                >
                  3
                </div>
                <div
                  data-pencil-name="Stat Delta Risk flags"
                  className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[3px_7px] justify-start items-start bg-[#E03A2F1F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Stat Delta Label Risk flags"
                    className="text-[9.5px]/[normal] box-border text-[#FF8A7A] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    +2 vs. baseline
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Stat Card Exposure identified"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[12px_13px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
              >
                <div
                  data-pencil-name="Stat Label Exposure identified"
                  className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Exposure identified
                </div>
                <div
                  data-pencil-name="Stat Value Exposure identified"
                  className="text-[22px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
                >
                  $12,400
                </div>
                <div
                  data-pencil-name="Stat Delta Exposure identified"
                  className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[3px_7px] justify-start items-start bg-[#4ADE8014] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Stat Delta Label Exposure identified"
                    className="text-[9.5px]/[normal] box-border text-[#7BE8A0] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    worth negotiating
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Stat Card Turnaround"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[12px_13px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
              >
                <div
                  data-pencil-name="Stat Label Turnaround"
                  className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Turnaround
                </div>
                <div
                  data-pencil-name="Stat Value Turnaround"
                  className="text-[22px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
                >
                  18h 42m
                </div>
                <div
                  data-pencil-name="Stat Delta Turnaround"
                  className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[3px_7px] justify-start items-start bg-[#4ADE8014] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Stat Delta Label Turnaround"
                    className="text-[9.5px]/[normal] box-border text-[#7BE8A0] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    under 24 hours
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Stat Card Clause coverage"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[12px_13px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
              >
                <div
                  data-pencil-name="Stat Label Clause coverage"
                  className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Clause coverage
                </div>
                <div
                  data-pencil-name="Stat Value Clause coverage"
                  className="text-[22px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
                >
                  94%
                </div>
                <div
                  data-pencil-name="Stat Delta Clause coverage"
                  className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[3px_7px] justify-start items-start bg-[#4ADE8014] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Stat Delta Label Clause coverage"
                    className="text-[9.5px]/[normal] box-border text-[#7BE8A0] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    of 34 pages
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Risk Breakdown"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[11px] p-[13px_15px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[12px]"
            >
              <div
                data-pencil-name="Breakdown Header"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Breakdown Title"
                  className="text-[12px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  Where the money is
                </div>
                <div
                  data-pencil-name="Breakdown Total"
                  className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Est. $22,700 in total exposure
                </div>
              </div>
              <div
                data-pencil-name="Risk Row Tail malpractice coverage"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
              >
                <div
                  data-pencil-name="Risk Name Tail malpractice coverage"
                  className="text-[11.5px]/[normal] box-border w-[196px] shrink-0 text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
                >
                  Tail malpractice coverage
                </div>
                <div
                  data-pencil-name="Track Tail malpractice coverage"
                  className="box-border [flex:1_1_0] h-[5px] flex flex-row gap-0 justify-start items-start bg-[#20242A] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Bar Tail malpractice coverage"
                    className="box-border w-[347px] shrink-0 h-[5px] bg-[#E03A2F] rounded-[999px]"
                  ></div>
                </div>
                <div
                  data-pencil-name="Risk Amount Tail malpractice coverage"
                  className="text-[11.5px]/[normal] box-border w-[64px] shrink-0 text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-right"
                >
                  $12,400
                </div>
                <div
                  data-pencil-name="Severity Tail malpractice coverage"
                  className="box-border w-[56px] shrink-0 h-fit flex flex-row gap-0 p-[3px_8px] justify-start items-start bg-[#E03A2F1F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Severity Label Tail malpractice coverage"
                    className="text-[9px]/[normal] box-border text-[#E03A2F] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Critical
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Risk Row Non-compete radius"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
              >
                <div
                  data-pencil-name="Risk Name Non-compete radius"
                  className="text-[11.5px]/[normal] box-border w-[196px] shrink-0 text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
                >
                  Non-compete radius
                </div>
                <div
                  data-pencil-name="Track Non-compete radius"
                  className="box-border [flex:1_1_0] h-[5px] flex flex-row gap-0 justify-start items-start bg-[#20242A] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Bar Non-compete radius"
                    className="box-border w-[153px] shrink-0 h-[5px] bg-[#F08A3C] rounded-[999px]"
                  ></div>
                </div>
                <div
                  data-pencil-name="Risk Amount Non-compete radius"
                  className="text-[11.5px]/[normal] box-border w-[64px] shrink-0 text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-right"
                >
                  $4,800
                </div>
                <div
                  data-pencil-name="Severity Non-compete radius"
                  className="box-border w-[56px] shrink-0 h-fit flex flex-row gap-0 p-[3px_8px] justify-start items-start bg-[#F08A3C1F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Severity Label Non-compete radius"
                    className="text-[9px]/[normal] box-border text-[#F08A3C] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    High
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Risk Row Call stipend floor"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
              >
                <div
                  data-pencil-name="Risk Name Call stipend floor"
                  className="text-[11.5px]/[normal] box-border w-[196px] shrink-0 text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
                >
                  Call stipend floor
                </div>
                <div
                  data-pencil-name="Track Call stipend floor"
                  className="box-border [flex:1_1_0] h-[5px] flex flex-row gap-0 justify-start items-start bg-[#20242A] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Bar Call stipend floor"
                    className="box-border w-[97px] shrink-0 h-[5px] bg-[#E3C05A] rounded-[999px]"
                  ></div>
                </div>
                <div
                  data-pencil-name="Risk Amount Call stipend floor"
                  className="text-[11.5px]/[normal] box-border w-[64px] shrink-0 text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-right"
                >
                  $2,100
                </div>
                <div
                  data-pencil-name="Severity Call stipend floor"
                  className="box-border w-[56px] shrink-0 h-fit flex flex-row gap-0 p-[3px_8px] justify-start items-start bg-[#E3C05A1F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Severity Label Call stipend floor"
                    className="text-[9px]/[normal] box-border text-[#E3C05A] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Medium
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Risk Row Bonus threshold"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
              >
                <div
                  data-pencil-name="Risk Name Bonus threshold"
                  className="text-[11.5px]/[normal] box-border w-[196px] shrink-0 text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
                >
                  Bonus threshold
                </div>
                <div
                  data-pencil-name="Track Bonus threshold"
                  className="box-border [flex:1_1_0] h-[5px] flex flex-row gap-0 justify-start items-start bg-[#20242A] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Bar Bonus threshold"
                    className="box-border w-[82px] shrink-0 h-[5px] bg-[#E3C05A] rounded-[999px]"
                  ></div>
                </div>
                <div
                  data-pencil-name="Risk Amount Bonus threshold"
                  className="text-[11.5px]/[normal] box-border w-[64px] shrink-0 text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-right"
                >
                  $1,900
                </div>
                <div
                  data-pencil-name="Severity Bonus threshold"
                  className="box-border w-[56px] shrink-0 h-fit flex flex-row gap-0 p-[3px_8px] justify-start items-start bg-[#E3C05A1F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Severity Label Bonus threshold"
                    className="text-[9px]/[normal] box-border text-[#E3C05A] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Medium
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Risk Row Signing bonus clawback"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-center"
              >
                <div
                  data-pencil-name="Risk Name Signing bonus clawback"
                  className="text-[11.5px]/[normal] box-border w-[196px] shrink-0 text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
                >
                  Signing bonus clawback
                </div>
                <div
                  data-pencil-name="Track Signing bonus clawback"
                  className="box-border [flex:1_1_0] h-[5px] flex flex-row gap-0 justify-start items-start bg-[#20242A] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Bar Signing bonus clawback"
                    className="box-border w-[62px] shrink-0 h-[5px] bg-[#6B8AF0] rounded-[999px]"
                  ></div>
                </div>
                <div
                  data-pencil-name="Risk Amount Signing bonus clawback"
                  className="text-[11.5px]/[normal] box-border w-[64px] shrink-0 text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-right"
                >
                  $1,500
                </div>
                <div
                  data-pencil-name="Severity Signing bonus clawback"
                  className="box-border w-[56px] shrink-0 h-fit flex flex-row gap-0 p-[3px_8px] justify-start items-start bg-[#6B8AF01F] rounded-[5px]"
                >
                  <div
                    data-pencil-name="Severity Label Signing bonus clawback"
                    className="text-[9px]/[normal] box-border text-[#6B8AF0] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Low
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Redline Preview"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[10px] p-[12px_15px] justify-start items-start bg-[#111318] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[12px]"
            >
              <div
                data-pencil-name="Redline Header"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Redline Title"
                  className="text-[11px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  Redline suggestion · Section 8.2 — Tail coverage
                </div>
                <div
                  data-pencil-name="Redline Index"
                  className="text-[10px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  1 of 3
                </div>
              </div>
              <div
                data-pencil-name="Redline Columns"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-start items-start"
              >
                <div
                  data-pencil-name="Redline Col ORIGINAL"
                  className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[9px_11px] justify-start items-start bg-[#0C0D10] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[8px]"
                >
                  <div
                    data-pencil-name="Redline Col Label ORIGINAL"
                    className="text-[8.5px]/[normal] box-border text-[#8A8D94] font-[Inter,system-ui,sans-serif] font-bold tracking-[1px] text-left [white-space:nowrap]"
                  >
                    ORIGINAL
                  </div>
                  <div
                    data-pencil-name="Redline Col Text ORIGINAL"
                    className="text-[10.5px]/[17px] box-border w-full text-[#6F7278] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    “Physician shall be solely responsible for procuring and maintaining tail
                    malpractice coverage for a period of five (5) years.”
                  </div>
                </div>
                <div
                  data-pencil-name="Redline Col SUGGESTED REDLINE"
                  className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[9px_11px] justify-start items-start bg-[#0C0D10] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[8px]"
                >
                  <div
                    data-pencil-name="Redline Col Label SUGGESTED REDLINE"
                    className="text-[8.5px]/[normal] box-border text-[#FF8A7A] font-[Inter,system-ui,sans-serif] font-bold tracking-[1px] text-left [white-space:nowrap]"
                  >
                    SUGGESTED REDLINE
                  </div>
                  <div
                    data-pencil-name="Redline Col Text SUGGESTED REDLINE"
                    className="text-[10.5px]/[17px] box-border w-full text-[#D9DBDF] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    “Company shall maintain tail malpractice coverage at its sole expense for a
                    period of five (5) years following termination.”
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Main Footer"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[2px_0px_0px_0px] justify-between items-center"
            >
              <div
                data-pencil-name="Footer Hint"
                className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
              >
                <svg
                  data-pencil-name="Footer Sparkle"
                  data-icon-name="sparkles"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[12px] shrink-0 h-[12px]"
                >
                  <path
                    d="M6.84619 0.58789q-0.28027 0.04102-0.54687 0.22559-0.29395 0.2085-0.40674 0.57422-0.02734 0.08203-0.3418 1.75683-0.31445 1.67139-0.35889 1.76367-0.04102 0.08887-0.10937 0.16065-0.07178 0.08203-0.15381 0.11279-0.11279 0.04102-0.4751 0.12305l-1.28857 0.23926q-1.68164 0.32129-1.77734 0.34863-0.23926 0.07178-0.44434 0.27002-0.20166 0.19482-0.29395 0.44092-0.08887 0.24268-0.06152 0.50244 0.02734 0.25635 0.16748 0.4956 0.09912 0.16748 0.27344 0.30762 0.17432 0.14014 0.35889 0.19824 0.0957 0.02734 1.76367 0.34863l1.28515 0.25293q0.37939 0.06836 0.50586 0.10938 0.08203 0.04443 0.15381 0.11279 0.05469 0.08545 0.09912 0.16748 0.04102 0.12646 0.10938 0.50586l0.23926 1.24414q0.32129 1.68164 0.34863 1.76367 0.15381 0.46484 0.58789 0.67335 0.2666 0.14014 0.51953 0.14013 0.25293 0 0.51953-0.14013 0.43408-0.2085 0.58789-0.67335 0.02734-0.08203 0.3418-1.74658 0.31445-1.66797 0.3418-1.72265 0.02734-0.11279 0.12646-0.2085 0.09912-0.09912 0.21191-0.14355 0.06836-0.02734 1.73291-0.3418 1.66797-0.31445 1.75-0.3418 0.46484-0.15381 0.67335-0.58789 0.2666-0.51953 0-1.03906-0.09912-0.2085-0.28028-0.36231-0.18115-0.15381-0.39307-0.22558-0.0957-0.02734-1.77734-0.34863l-1.23047-0.23926q-0.37939-0.06836-0.50586-0.10938-0.0957-0.03076-0.15381-0.08545-0.10938-0.11279-0.1538-0.23925-0.02734-0.06836-0.3418-1.73291-0.31445-1.66797-0.3418-1.75-0.14014-0.46484-0.60498-0.68702-0.14014-0.07178-0.31445-0.09912-0.17432-0.02734-0.3418-0.01367z m4.73047 0.01367q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-0.36572 0q-0.26318 0.01367-0.32813 0.02051-0.06152 0.00684-0.1333 0.03418-0.2666 0.12646-0.31445 0.42041-0.04785 0.29395 0.14697 0.50586 0.08545 0.08203 0.18115 0.14013 0.08545 0.02734 0.14697 0.03418 0.06494 0.00684 0.31788 0.02051l0.34863 0 0 0.34863q0.01367 0.25293 0.02051 0.31788 0.00683 0.06152 0.03418 0.14697 0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.05811 0.02051-0.32129l0-0.36572 0.29395 0q0.32129 0 0.45458-0.03418 0.1333-0.03418 0.25293-0.15381 0.11963-0.11963 0.15381-0.31445 0.03418-0.19824-0.04785-0.35205-0.04443-0.08203-0.12305-0.15039-0.0752-0.07178-0.1538-0.10596-0.07519-0.0376-0.14014-0.04443-0.06152-0.00684-0.32813-0.02051l-0.3623 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m-4.26904 2.7583q0.23926 1.26123 0.29394 1.55518 0.05811 0.29395 0.1128 0.42041 0.12646 0.30762 0.38281 0.56738 0.25977 0.25635 0.56738 0.38281 0.12646 0.05469 0.41358 0.1128 0.28711 0.05469 1.54833 0.29394 1.56885 0.29395 1.57569 0.30762 0.00684 0.01367-1.60303 0.31445-1.60986 0.30078-1.72266 0.32813-0.39307 0.09912-0.72119 0.40674-0.32813 0.30762-0.46826 0.70068-0.04443 0.09912-0.09912 0.43408l-0.32129 1.63721q-0.25293 1.37402-0.2666 1.37402-0.01367 0-0.30762-1.55517-0.23926-1.2749-0.29736-1.56202-0.05469-0.28711-0.10938-0.41357-0.09912-0.23584-0.30078-0.46484-0.20166-0.23242-0.41357-0.35889-0.14014-0.09912-0.2666-0.14014-0.16748-0.04102-0.57422-0.12646l-1.28516-0.25293q-1.6543-0.30762-1.64062-0.32129 0.01367-0.01367 1.60986-0.30762l1.51416-0.29394q0.25293-0.05811 0.38965-0.1128 0.29395-0.11279 0.56738-0.37597 0.27344-0.2666 0.3999-0.57422 0.05469-0.12646 0.10938-0.41358 0.05811-0.28711 0.29736-1.56201 0.29395-1.55518 0.30762-1.55517 0.01367 0 0.30762 1.55517z m-5.33203 6.59326q-0.31104 0.07178-0.57764 0.23926-0.26318 0.16748-0.46143 0.42041-0.34863 0.4751-0.34863 1.05615 0 0.58105 0.3418 1.04249 0.34521 0.46143 0.91943 0.6289 0.64258 0.18457 1.25781-0.10937 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283 0.02734-0.11279 0.03418-0.18116 0.00684-0.06836 0.02051-0.28027 0-0.25293-0.02051-0.3623-0.02051-0.11279-0.10596-0.32471-0.15381-0.36231-0.46826-0.63574-0.31445-0.27344-0.70752-0.38623-0.15381-0.02734-0.3999-0.03418-0.24268-0.00684-0.39648 0.0205z m0.60156 1.18946q0.24951 0.11279 0.31787 0.38623 0.07178 0.27344-0.0957 0.48193-0.12646 0.15381-0.29395 0.21192-0.16748 0.05469-0.33496 0-0.25293-0.07178-0.37939-0.33497-0.04102-0.09912-0.03418-0.23242 0.00684-0.1333 0.04785-0.23242 0.09912-0.22217 0.32129-0.29736 0.22559-0.07861 0.45117 0.01709z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
                <div
                  data-pencil-name="Footer Hint Text"
                  className="text-[11px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  1 suggested redline ready to accept
                </div>
              </div>
              <div
                data-pencil-name="Footer Buttons"
                className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
              >
                <motion.div whileHover={{ scale: 1.03, y: -1, backgroundColor: "#1A1D24" }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} 
                  data-pencil-name="Export Button"
                  className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[7px_12px] justify-start items-start [outline:1px_solid_#252A31] [outline-offset:-0.5px] rounded-[7px]"
                >
                  <div
                    data-pencil-name="Export Label"
                    className="text-[10.5px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                  >
                    Export redline
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -1, boxShadow: "0px 6px 18px rgba(224, 58, 47, 0.35)" }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} 
                  data-pencil-name="Send Button"
                  className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[7px_12px] justify-start items-start bg-[#E03A2F] rounded-[7px]"
                >
                  <div
                    data-pencil-name="Send Label"
                    className="text-[10.5px]/[normal] box-border text-[#FFFFFF] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Send to recruiter
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        data-pencil-name="Credentials Bar"
        className="box-border w-full h-fit shrink-0 flex flex-col gap-[24px] p-[56px_100px_40px_100px] justify-start items-center bg-[#08080A]"
      >
        <div
          data-pencil-name="Credentials Label"
          className="text-[10.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.5px] text-left [white-space:nowrap]"
        >
          BUILT TO THE STANDARDS HEALTHCARE ORGANIZATIONS REQUIRE
        </div>
        <div
          data-pencil-name="Credentials Row"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[46px] justify-center items-center"
        >
          <div
            data-pencil-name="Credential ISO 27001"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
          >
            <svg
              data-pencil-name="Credential Icon ISO 27001"
              data-icon-name="shield-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[15px] shrink-0 h-[15px]"
            >
              <path
                d="M6.84619 0.60156q-0.34863 0.02734-0.68701 0.30762-0.51611 0.42041-1.00147 0.70068-0.48193 0.28027-1.01513 0.4751-0.30762 0.11279-0.58789 0.1709-0.28027 0.05469-0.66992 0.08203-0.23926 0.01367-0.36573 0.07178-0.19482 0.06836-0.37939 0.22217-0.18115 0.15381-0.26319 0.34863l-0.01367 0.03076q-0.07178 0.12646-0.08545 0.22217-0.01367 0.15381-0.02734 0.60156l0 1.78076q0 2.25244 0.01367 2.46094 0.14014 1.6543 1.10742 2.88477 0.14014 0.16748 0.43409 0.46142 0.29395 0.29394 0.48877 0.44775 0.92285 0.7417 2.2832 1.27491 0.46143 0.18115 0.65625 0.23926 0.23926 0.05469 0.43408 0.01367 0.16748-0.02734 0.5332-0.15381 1.35693-0.51953 2.27979-1.20313 0.37939-0.2666 0.71435-0.60498 1.37402-1.3706 1.54151-3.37353 0.01367-0.23584 0.01367-2.46094 0-2.22852-0.02734-2.35498-0.07178-0.32129-0.31787-0.56396-0.24268-0.24609-0.5503-0.31788-0.09912-0.02734-0.37939-0.04101-0.48877-0.02734-0.96387-0.18115-0.81348-0.2666-1.55518-0.77246-0.2666-0.18115-0.64257-0.48877-0.42041-0.33496-0.96729-0.28028z m0.43408 1.34326q0.64258 0.51953 1.32959 0.86817 1.2168 0.61865 2.25244 0.68701l0.21192 0-0.01367 4.31348q0 0.33496-0.02735 0.50244-0.22559 1.34326-1.1416 2.27637-0.91602 0.92969-2.66601 1.57226l-0.21192 0.08545-0.18115-0.05469q-2.32422-0.85449-3.2334-2.22851-0.47852-0.71436-0.63232-1.63721-0.02734-0.18115-0.02735-0.50244l-0.01367-4.32715 0.19483 0q0.86816-0.05469 1.84912-0.48193 0.98096-0.42725 1.83545-1.12793 0.16748-0.14014 0.19482-0.14014 0.02734 0 0.28027 0.19482z m1.32959 3.31885q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Credential Label ISO 27001"
              className="text-[13.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.1px] text-left [white-space:nowrap]"
            >
              ISO 27001
            </div>
          </div>
          <div
            data-pencil-name="Credential SOC 2 Type I"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
          >
            <svg
              data-pencil-name="Credential Icon SOC 2 Type I"
              data-icon-name="lock"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[15px] shrink-0 h-[15px]"
            >
              <path
                d="M6.77441 0.60156q-0.72803 0.02734-1.38769 0.3794-0.65625 0.34863-1.12451 0.92285-0.46826 0.57422-0.64942 1.28857l0 0.01367q-0.07178 0.29395-0.08545 0.48536-0.01367 0.18799-0.02734 1.02539l0 1.10742-0.2666 0q-0.40674 0-0.63916 0.04443-0.229 0.04102-0.45117 0.15039-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599l-0.05469 0.15381 0 4.7168 0.05469 0.15381q0.15723 0.51953 0.56055 0.86132 0.40674 0.3418 0.93994 0.39991 0.14014 0.02734 4.26904 0.02734 4.12891 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-4.7168-0.05469-0.15381q-0.11279-0.36572-0.35205-0.64599-0.23584-0.28027-0.56055-0.44776-0.22217-0.10938-0.45459-0.15039-0.229-0.04443-0.63574-0.04443l-0.2666 0 0-1.13477q-0.01367-0.81006-0.02734-0.99804-0.01367-0.19141-0.08545-0.47168l0-0.02735q-0.18115-0.71436-0.66651-1.30224-0.48193-0.58789-1.15185-0.93653-0.82715-0.40674-1.79444-0.35205z m0.70069 1.20313q0.75537 0.15381 1.2749 0.7417 0.3623 0.40674 0.50244 0.92627 0.05811 0.19482 0.06494 0.41357 0.00684 0.21533 0.00684 0.9707l0 0.96729-4.64844 0 0-1.06299q0-0.82715 0.01367-1.0083 0.01367-0.18457 0.09912-0.40674 0.22217-0.64258 0.74854-1.06982 0.52637-0.42725 1.19629-0.5127 0.14014-0.01367 0.3623 0 0.22559 0.01367 0.3794 0.04102z m3.85205 5.25q0.08203 0.04443 0.15723 0.12304 0.07861 0.0752 0.11279 0.15381 0.0376 0.0752 0.0581 0.19483 0.02051 0.11621 0.00684 2.19092l0 1.6372q0 0.3623-0.02734 0.48877-0.01367 0.08545-0.07178 0.14014l-0.01367 0.02734q-0.11279 0.12646-0.26661 0.19824l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.01367-0.02734q-0.05811-0.06836-0.07178-0.14014-0.02734-0.12646-0.02734-0.48877l0-1.65088q-0.01367-2.08838 0.01367-2.20117 0.01367-0.18115 0.1333-0.31445 0.11963-0.1333 0.28711-0.17432 0.06836-0.01367 4.25537-0.01367l4.20069 0.01367 0.09912 0.04102z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Credential Label SOC 2 Type I"
              className="text-[13.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.1px] text-left [white-space:nowrap]"
            >
              SOC 2 Type I
            </div>
          </div>
          <div
            data-pencil-name="Credential HIPAA"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
          >
            <svg
              data-pencil-name="Credential Icon HIPAA"
              data-icon-name="scan-face"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[15px] shrink-0 h-[15px]"
            >
              <path
                d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-4.63477 3.48633q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.23926 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.15381 0.15381 0.3999 0.16748 0.24609 0.01367 0.42041-0.16065 0.17432-0.17432 0.17432-0.41357 0-0.23926-0.16748-0.3999-0.16748-0.16064-0.39307-0.17432-0.14014 0-0.18115 0.01367z m3.5 0q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.23926 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.15381 0.15381 0.3999 0.16748 0.24609 0.01367 0.42041-0.16065 0.17432-0.17432 0.17432-0.41357 0-0.23926-0.16748-0.3999-0.16748-0.16064-0.39307-0.17432-0.14014 0-0.18115 0.01367z m-4.0332 2.91211q-0.14014 0.01367-0.2666 0.11963-0.12305 0.10596-0.18116 0.2461-0.02734 0.0957-0.02734 0.21533 0 0.11963 0.04102 0.21875 0.08545 0.18115 0.36572 0.44775 0.28027 0.26318 0.61523 0.4751 0.68701 0.46143 1.44922 0.56055 0.76221 0.0957 1.53125-0.15381 0.43408-0.14014 0.86133-0.43409 0.42725-0.29395 0.73486-0.64599 0.12646-0.14014 0.17432-0.24268 0.05127-0.10596 0.05127-0.23242 0-0.3623-0.33496-0.5332-0.11279-0.05469-0.23926-0.05469-0.15381 0-0.25977 0.05811-0.10254 0.05469-0.229 0.19482-0.22559 0.24951-0.52637 0.46143-0.30078 0.2085-0.60839 0.32129-0.19482 0.07178-0.3418 0.09228-0.14697 0.02051-0.37256 0.02051-0.22559 0-0.37256-0.02051-0.14697-0.02051-0.3418-0.09228-0.30762-0.11279-0.60839-0.32129-0.30078-0.21191-0.52637-0.46143-0.0957-0.11279-0.15381-0.15381-0.19482-0.12646-0.43408-0.08545z m-2.91211 1.75q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Credential Label HIPAA"
              className="text-[13.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.1px] text-left [white-space:nowrap]"
            >
              HIPAA
            </div>
          </div>
          <div
            data-pencil-name="Credential GDPR"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
          >
            <svg
              data-pencil-name="Credential Icon GDPR"
              data-icon-name="globe"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[15px] shrink-0 h-[15px]"
            >
              <path
                d="M6.76074 0.58789q-1.8457 0.09912-3.3291 1.09375-1.0083 0.66992-1.70215 1.65772-0.69385 0.98779-0.97412 2.16357-0.16748 0.71436-0.16748 1.49707 0 0.61523 0.0957 1.16895 0.09912 0.55371 0.32471 1.12793 0.4751 1.24414 1.43897 2.21826 0.96729 0.97412 2.21484 1.46289 0.58789 0.22559 1.1416 0.33154 0.55371 0.10254 1.19629 0.10254 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25097-2.43359 0.35205-1.35352 0.11963-2.72412-0.229-1.37402-1.01513-2.52246-0.81006-1.18945-2.05078-1.92432-1.2373-0.73486-2.66602-0.86133-0.48877-0.04102-0.82715-0.02734z m-1.14844 1.3877q-1.09033 1.62354-1.39794 3.52734-0.04102 0.16748-0.07178 0.44092-0.02734 0.27344-0.02735 0.34179l0 0.02735q0 0.07178-0.03418 0.08545-0.03418 0.01367-0.21875 0.02734l-2.08496 0 0.01368-0.09912q0.08545-0.64258 0.34179-1.28516 0.25977-0.646 0.65283-1.16211 1.0083-1.36035 2.64551-1.89013l0.19824-0.05811q0.01367 0-0.01709 0.04444z m3.25049 0.12304q1.03564 0.37939 1.84571 1.19287 0.81348 0.81006 1.20654 1.84571 0.22217 0.60156 0.29394 1.18945l0.01368 0.09912-2.08838 0q-0.18115-0.01367-0.21533-0.02734-0.03418-0.01367-0.03418-0.08545l0-0.02735q0-0.06836-0.03077-0.34179-0.02734-0.27344-0.06836-0.45459-0.30762-1.89014-1.38427-3.51367l-0.04444-0.04444 0.15381 0.04444q0.14014 0.04102 0.35205 0.12304z m-1.72265 0.14014q0.64258 0.82715 1.04931 1.85596 0.40674 1.02881 0.50586 2.02343l0.02735 0.30762-3.45899 0 0.04102-0.29394q0.08545-0.90918 0.42041-1.83204 0.33838-0.92627 0.88183-1.70898 0.11279-0.16748 0.2461-0.34863 0.1333-0.18457 0.14697-0.17774 0.01367 0.00684 0.14014 0.17432z m-3.03858 5.36279q0.01367 0.02734 0.01367 0.10596 0 0.0752 0.02735 0.34863 0.03076 0.27344 0.07178 0.44092 0.30762 1.90381 1.38427 3.52734l0.04444 0.04444-0.15381-0.04444q-1.66797-0.50244-2.70362-1.90381-0.39307-0.51611-0.65283-1.15869-0.25635-0.646-0.34179-1.28857l-0.01368-0.09912 2.1294 0.01367q0.18115 0 0.19482 0.01367z m4.6211 0.02735q-0.01367 0.05811-0.02735 0.23925-0.07178 0.75537-0.33154 1.55518-0.25635 0.79639-0.64941 1.4834-0.15381 0.2666-0.42041 0.64599-0.2666 0.37598-0.29395 0.37598-0.02734 0-0.29395-0.37598-0.2666-0.37939-0.42041-0.64599-0.39307-0.68701-0.65283-1.4834-0.25635-0.7998-0.32812-1.55518l-0.04102-0.29394 3.45899 0 0 0.05469z m3.48632 0.04443q-0.16748 1.32959-0.98779 2.44385-0.82031 1.11084-2.05078 1.67138-0.23926 0.09912-0.52637 0.19825-0.28711 0.0957-0.27343 0.06836l0.07177-0.09913q0.42041-0.64258 0.76221-1.45605 0.3418-0.81348 0.5127-1.62354 0.06836-0.28027 0.11621-0.64941 0.05127-0.37256 0.05127-0.51269l0-0.02735q0-0.07178 0.03418-0.08545 0.03418-0.01367 0.21533-0.02734l2.08838 0-0.01368 0.09912z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Credential Label GDPR"
              className="text-[13.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.1px] text-left [white-space:nowrap]"
            >
              GDPR
            </div>
          </div>
          <div
            data-pencil-name="Credential Physician-attorney reviewed"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
          >
            <svg
              data-pencil-name="Credential Icon Physician-attorney reviewed"
              data-icon-name="stethoscope"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[15px] shrink-0 h-[15px]"
            >
              <path
                d="M2.82666 0.60156q-0.15381 0.01367-0.28711 0.12647-0.12988 0.11279-0.17432 0.25293l-0.04101 0.19482-0.08545 0q-0.16748 0-0.3999 0.07178-0.229 0.06836-0.41016 0.16748-0.28027 0.16748-0.48535 0.44775-0.20166 0.28027-0.30078 0.58789-0.04102 0.18115-0.05469 0.46827-0.01367 0.28711-0.00684 1.36035 0.00684 1.06982 0.02051 1.30908 0.01367 0.23584 0.08545 0.54346 0.2085 0.98096 0.87158 1.75683 0.6665 0.77588 1.60645 1.15528 0.32129 0.12646 0.71435 0.20849 0.16748 0.04443 0.2085 0.05127 0.04102 0.00684 0.04102 0.04785 0.01367 0.19482 0.10595 0.49219 0.09229 0.29395 0.18799 0.52979 0.28027 0.65967 0.78272 1.19287 0.50586 0.52978 1.15185 0.8374 0.40332 0.2085 0.79639 0.29394 0.29395 0.08545 0.46826 0.10596 0.17432 0.02051 0.54004 0.02051 0.30762 0 0.42041-0.00684 0.11279-0.00684 0.2666-0.03418 0.85449-0.15381 1.55176-0.6084 0.70068-0.45801 1.17578-1.17236 0.2666-0.40332 0.43408-0.89209 0.1709-0.49219 0.22559-0.96728 0.01367-0.18457 0.01367-0.92627l0-0.7417 0.08545-0.02735q0.18115-0.05469 0.38281-0.21533 0.20508-0.16406 0.34522-0.34521 0.24951-0.33496 0.31787-0.73487 0.07178-0.3999-0.04102-0.80322-0.15381-0.51953-0.56738-0.86133-0.41016-0.34521-0.92969-0.38623-0.51611-0.04102-0.95019 0.16748-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599-0.02734 0.11279-0.04102 0.18457-0.01367 0.06836-0.01367 0.27686 0 0.25293 0.02051 0.37256 0.02051 0.11621 0.10596 0.31445 0.12646 0.29395 0.37597 0.55371 0.25293 0.25635 0.53321 0.36914l0.11279 0.04102 0 0.82715q-0.01367 0.65625-0.02735 0.83398-0.01367 0.17432-0.08544 0.42725-0.18115 0.65625-0.65967 1.16894-0.4751 0.50928-1.11768 0.74854-0.48877 0.18115-1.02881 0.18115-0.54004 0-1.02881-0.19482-0.29395-0.09912-0.52636-0.25294-0.229-0.15381-0.46826-0.37939-0.4751-0.4751-0.70069-1.09033-0.04102-0.09912-0.08545-0.25977-0.04102-0.16064-0.04101-0.18115 0-0.02051 0.12646-0.05127 0.33838-0.05469 0.72803-0.20849 1.06641-0.40674 1.76367-1.34327 0.70068-0.93994 0.81348-2.08496 0.01367-0.22559 0.01367-1.59619l-0.01367-1.38769-0.04102-0.15381q-0.14014-0.48877-0.47851-0.81348-0.46143-0.44775-1.06299-0.48877l-0.15381-0.01367 0-0.05469q0-0.04443-0.04443-0.14697-0.04102-0.10596-0.08203-0.14697-0.11279-0.14014-0.26661-0.19825-0.06836-0.02734-0.19482-0.02734-0.2085 0-0.37256 0.1333-0.16064 0.1333-0.18799 0.3418-0.02734 0.09912-0.02734 0.68701 0 0.58789 0.01367 0.68701 0.05469 0.23584 0.24951 0.36914 0.19824 0.1333 0.42383 0.09229 0.10938-0.01367 0.18115-0.04102 0.11279-0.05811 0.20166-0.1914 0.09229-0.1333 0.10596-0.25635l0-0.07178 0.09912 0.01367q0.14014 0.01367 0.24951 0.09912 0.11279 0.08203 0.18457 0.22217l0.04102 0.08545 0 1.4834q0 1.09375-0.01367 1.31934-0.01367 0.22217-0.09912 0.48535l0 0.01709q-0.18115 0.65625-0.65967 1.16894-0.4751 0.50928-1.11768 0.74854-0.4751 0.18115-1.02197 0.18115-0.54688 0-1.03565-0.19482-0.29395-0.09912-0.52636-0.25293-0.229-0.15381-0.46826-0.3794-0.70068-0.68359-0.8545-1.66455-0.01367-0.14014-0.01367-1.52783l0-1.37061 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596l0.09912-0.01367 0.01367 0.05469q0.02734 0.21191 0.15381 0.34521 0.12646 0.1333 0.32129 0.16065 0.08545 0.02734 0.18799 0.00683 0.10596-0.02051 0.18115-0.05468 0.07861-0.0376 0.14697-0.1128 0.07178-0.07861 0.11621-0.16064l0.04102-0.09912 0.01367-1.41504-0.04102-0.0957q-0.08545-0.19824-0.25293-0.30079-0.16748-0.10596-0.37939-0.06494z m9.08838 4.70313q0.18115 0.09912 0.28027 0.29394 0.05469 0.09912 0.05469 0.23242 0 0.1333-0.05127 0.23243-0.04785 0.0957-0.11963 0.17431-0.06836 0.0752-0.15039 0.11963-0.09912 0.05469-0.25976 0.05469-0.16064 0-0.25977-0.05469-0.2666-0.14014-0.31445-0.43408-0.04785-0.29395 0.17431-0.50586 0.12646-0.12646 0.30078-0.15381 0.17774-0.02734 0.34522 0.04102z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Credential Label Physician-attorney reviewed"
              className="text-[13.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.1px] text-left [white-space:nowrap]"
            >
              Physician-attorney reviewed
            </div>
          </div>
        </div>
      </motion.div>
      <div
        data-pencil-name="Platform Section"
        className="box-border w-full h-fit shrink-0 flex flex-col gap-[44px] p-[96px_100px] justify-start items-start bg-[#08080A]"
      >
        <div
          data-pencil-name="Platform Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="Platform Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            THE PLATFORM
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Platform Header"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[60px] justify-between items-end"
        >
          <div
            data-pencil-name="Platform Header Left"
            className="box-border w-[640px] shrink-0 h-fit flex flex-col gap-[16px] justify-start items-start"
          >
            <div
              data-pencil-name="Platform Headline"
              className="text-[40px]/[45px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-left"
            >
              Everything you need to negotiate like you've done this before.
            </div>
            <div
              data-pencil-name="Platform Sub"
              className="text-[14.5px]/[24px] box-border w-[520px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Most physicians negotiate once every three to five years. RedlineMD gives you the
              clause-level read of someone who does it every week.
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.03, y: -1, backgroundColor: "#1C1F26" }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} 
            data-pencil-name="Platform Button"
            className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-[12px] p-[8px_8px_8px_20px] justify-start items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
          >
            <div
              data-pencil-name="Platform Button Label"
              className="text-[13.5px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
            >
              Request a review
            </div>
            <div
              data-pencil-name="Platform Button Chevron"
              className="box-border w-[24px] shrink-0 h-[24px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF12] rounded-[999px]"
            >
              <svg
                data-pencil-name="Platform Button Icon"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[13px] shrink-0 h-[13px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#F6F5F3"
                ></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
        <div
          data-pencil-name="Platform Cards Row 1"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start"
        >
          <motion.div whileHover={{ y: -6, borderColor: "#3A3F4A", boxShadow: "0px 16px 36px rgba(0,0,0,0.6)" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Platform Card Clause-level redlining"
            className="cursor-pointer transition-colors box-border [flex:1_1_0] h-fit flex flex-col gap-0 p-[24px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[14px]"
          >
            <div
              data-pencil-name="Card Icon Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
            >
              <div
                data-pencil-name="Card Icon Box"
                className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF0A] [outline:1px_solid_#FFFFFF0F] [outline-offset:-0.5px] rounded-[9px]"
              >
                <svg
                  data-pencil-name="Card Icon Clause-level redlining"
                  data-icon-name="file-diff"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[17px] shrink-0 h-[17px]"
                >
                  <path
                    d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.33496-0.16748-0.72803-0.19483-0.18115-0.02734-2.4917-0.02734-2.31055 0-2.4917 0.02734z m4.99707 1.16211q0.09912 0.02734 0.21191 0.07178 0.08203 0.04102 0.27686 0.229 0.19824 0.18799 0.98096 0.97412 0.82715 0.82715 0.98779 1.00147 0.16065 0.17432 0.21533 0.27344l0.07178 0.14013 0 7.32129-0.02735 0.0957q-0.04443 0.09912-0.12988 0.19141-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.48487-0.01367 2.40283 0 2.48486 0.01367z m-1.46973 1.75q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242-0.01367 0.06836-0.0205 0.17432-0.00684 0.10596-0.00684 0.55371l0 0.64258-1.32959 0.01367-0.09912 0.04102q-0.2666 0.12646-0.31445 0.42041-0.04785 0.29395 0.14697 0.50586 0.08545 0.08203 0.18115 0.14013l0.1128 0.04102 1.30224 0.01367 0 0.62891q0 0.40674 0 0.5332 0.01367 0.16748 0.04102 0.23926 0.03076 0.06836 0.11279 0.15381 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.42041-0.18115 0.08203-0.08545 0.10938-0.15381 0.03076-0.07178 0.04443-0.23926 0-0.12646 0-0.5332l0-0.62891 1.30224-0.01367 0.1128-0.04102q0.2085-0.11279 0.29053-0.32129 0.08545-0.21191 0.00683-0.42041-0.0752-0.21191-0.28369-0.3247l-0.09912-0.04102-1.32959-0.01367 0-0.64258q0-0.44775-0.00684-0.55371-0.00684-0.10596-0.02051-0.17432-0.08545-0.19824-0.28369-0.30078-0.19482-0.10596-0.40332-0.06494z m-1.70898 5.83789q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041l0.09912 0.04102 3.80762 0 0.09912-0.04102q0.2666-0.12646 0.32129-0.42041 0.05469-0.29395-0.15381-0.50586-0.14014-0.14014-0.33496-0.16748-0.09912-0.02734-1.84229-0.02734-1.74316 0-1.84228 0.02734z"
                    fill="#F6F5F3"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Card Tag Clause-level redlining"
                className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[5px_10px] justify-start items-start bg-[#4ADE8014] rounded-[999px]"
              >
                <div
                  data-pencil-name="Card Tag Label Clause-level redlining"
                  className="text-[9.5px]/[normal] box-border text-[#7BE8A0] font-[Inter,system-ui,sans-serif] font-bold tracking-[0.8px] text-left [white-space:nowrap]"
                >
                  NEW
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Card Text Clause-level redlining"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[9px] p-[22px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="Card Title Clause-level redlining"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.35px] text-left [white-space:nowrap]"
              >
                Clause-level redlining
              </div>
              <div
                data-pencil-name="Card Desc Clause-level redlining"
                className="text-[13.5px]/[22px] box-border w-full text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Tracked changes on the exact document you were emailed, annotated in plain English —
                no legal dictionary required.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -6, borderColor: "#3A3F4A", boxShadow: "0px 16px 36px rgba(0,0,0,0.6)" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Platform Card Dollar-cost risk scoring"
            className="cursor-pointer transition-colors box-border [flex:1_1_0] h-fit flex flex-col gap-0 p-[24px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[14px]"
          >
            <div
              data-pencil-name="Card Icon Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
            >
              <div
                data-pencil-name="Card Icon Box"
                className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF0A] [outline:1px_solid_#FFFFFF0F] [outline-offset:-0.5px] rounded-[9px]"
              >
                <svg
                  data-pencil-name="Card Icon Dollar-cost risk scoring"
                  data-icon-name="table-2"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[17px] shrink-0 h-[17px]"
                >
                  <path
                    d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.08545 0.02735-0.71436l0.01367-3.78027-0.01367-3.78027q0-0.62891-0.02735-0.71436-0.12646-0.48877-0.458-0.81689-0.32813-0.33154-0.80323-0.47168l-0.14013-0.04102-4.32715 0q-4.3374 0-4.4502 0.02734z m2.07129 2.29687l0 1.17578-2.35156 0 0.01367-1.89014 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 0.96729-0.01367l0.88183 0 0 1.17578z m6.6377-1.12109q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 1.89014-5.85156 0 0-2.35156 5.39013 0.01367 0.09913 0.04102z m-6.6377 6.37109l0 2.92578-0.88183 0q-0.88184 0-0.98096-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09912-0.01367-5.39014 2.35156 0 0 2.92578z m6.98633-0.23926l0 2.70362-0.04102 0.09912q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-2.73096 0.02734l-2.63183 0 0-5.85156 5.85156 0-0.01367 2.68652z"
                    fill="#F6F5F3"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="Card Text Dollar-cost risk scoring"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[9px] p-[22px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="Card Title Dollar-cost risk scoring"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.35px] text-left [white-space:nowrap]"
              >
                Dollar-cost risk scoring
              </div>
              <div
                data-pencil-name="Card Desc Dollar-cost risk scoring"
                className="text-[13.5px]/[22px] box-border w-full text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Every flag is priced: tail coverage, RVU thresholds, call stipends, and the bonus
                triggers that quietly reset.
              </div>
            </div>
          </motion.div>
        </div>
        <div
          data-pencil-name="Platform Cards Row 2"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start"
        >
          <motion.div whileHover={{ y: -6, borderColor: "#3A3F4A", boxShadow: "0px 16px 36px rgba(0,0,0,0.6)" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Platform Card Negotiation scripts"
            className="cursor-pointer transition-colors box-border [flex:1_1_0] h-fit flex flex-col gap-0 p-[24px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[14px]"
          >
            <div
              data-pencil-name="Card Icon Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
            >
              <div
                data-pencil-name="Card Icon Box"
                className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF0A] [outline:1px_solid_#FFFFFF0F] [outline-offset:-0.5px] rounded-[9px]"
              >
                <svg
                  data-pencil-name="Card Icon Negotiation scripts"
                  data-icon-name="mail"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[17px] shrink-0 h-[17px]"
                >
                  <path
                    d="M2.05762 1.77734q-0.28027 0.04102-0.53321 0.16748-0.34863 0.19824-0.58789 0.50586-0.23584 0.30762-0.32129 0.70069-0.01367 0.10938-0.02734 0.66992l0 3.17871 0 3.17871q0.01367 0.56055 0.02734 0.66992 0.11279 0.5332 0.50245 0.90577 0.39307 0.36914 0.92627 0.46826 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.92286-0.46826 0.39307-0.37256 0.50586-0.90577 0.01367-0.10938 0.02734-0.66992l0-3.17871 0-3.17871q-0.01367-0.56055-0.02734-0.66992-0.12647-0.54688-0.53321-0.92285-0.40674-0.37939-0.95019-0.46485-0.1709-0.01367-4.93897-0.01367-4.76465 0-4.90478 0.02734z m9.81298 1.17579q0.09912 0.04443 0.18116 0.12304 0.08545 0.0752 0.12646 0.16065 0.04443 0.08203 0.05127 0.12988 0.00684 0.04785 0.00684 0.18799l0 0.21191-2.46436 1.58252q-2.46436 1.56543-2.53613 1.60303-0.06836 0.03418-0.16748 0.03418l-0.02734 0.01367q-0.0957 0.01367-0.2085-0.04102-0.15381-0.07178-0.65967-0.37939l-4.40918-2.81299 0-0.21191q0-0.14014 0.00684-0.18799 0.00684-0.04785 0.04101-0.12305 0.0376-0.07861 0.12647-0.16064 0.09229-0.08545 0.16748-0.1128 0.07861-0.03076 0.70752-0.04443l4.18701 0 4.18701 0q0.61523 0 0.68359 0.02735z m-5.63964 5.02783q0.22217 0.10938 0.46142 0.15381 0.09912 0.02734 0.30762 0.02734 0.2085 0 0.30762-0.02734 0.30762-0.05811 0.54687-0.19825 0.14014-0.08203 2.26612-1.42529l2.12939-1.36035-0.01367 5.50293-0.04102 0.09912q-0.11279 0.2085-0.3247 0.29395l-0.09571 0.02734-9.5498 0-0.09571-0.02734q-0.21191-0.08545-0.3247-0.29395l-0.04102-0.09912-0.01367-5.50293 2.17041 1.37402q2.17041 1.38428 2.31055 1.45606z"
                    fill="#F6F5F3"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="Card Text Negotiation scripts"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[9px] p-[22px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="Card Title Negotiation scripts"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.35px] text-left [white-space:nowrap]"
              >
                Negotiation scripts
              </div>
              <div
                data-pencil-name="Card Desc Negotiation scripts"
                className="text-[13.5px]/[22px] box-border w-full text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                A ready-to-send email citing the exact clause numbers you are pushing back on,
                written in your voice.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -6, borderColor: "#3A3F4A", boxShadow: "0px 16px 36px rgba(0,0,0,0.6)" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Platform Card Physician-attorney review"
            className="cursor-pointer transition-colors box-border [flex:1_1_0] h-fit flex flex-col gap-0 p-[24px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[14px]"
          >
            <div
              data-pencil-name="Card Icon Row"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
            >
              <div
                data-pencil-name="Card Icon Box"
                className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF0A] [outline:1px_solid_#FFFFFF0F] [outline-offset:-0.5px] rounded-[9px]"
              >
                <svg
                  data-pencil-name="Card Icon Physician-attorney review"
                  data-icon-name="stethoscope"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[17px] shrink-0 h-[17px]"
                >
                  <path
                    d="M2.82666 0.60156q-0.15381 0.01367-0.28711 0.12647-0.12988 0.11279-0.17432 0.25293l-0.04101 0.19482-0.08545 0q-0.16748 0-0.3999 0.07178-0.229 0.06836-0.41016 0.16748-0.28027 0.16748-0.48535 0.44775-0.20166 0.28027-0.30078 0.58789-0.04102 0.18115-0.05469 0.46827-0.01367 0.28711-0.00684 1.36035 0.00684 1.06982 0.02051 1.30908 0.01367 0.23584 0.08545 0.54346 0.2085 0.98096 0.87158 1.75683 0.6665 0.77588 1.60645 1.15528 0.32129 0.12646 0.71435 0.20849 0.16748 0.04443 0.2085 0.05127 0.04102 0.00684 0.04102 0.04785 0.01367 0.19482 0.10595 0.49219 0.09229 0.29395 0.18799 0.52979 0.28027 0.65967 0.78272 1.19287 0.50586 0.52978 1.15185 0.8374 0.40332 0.2085 0.79639 0.29394 0.29395 0.08545 0.46826 0.10596 0.17432 0.02051 0.54004 0.02051 0.30762 0 0.42041-0.00684 0.11279-0.00684 0.2666-0.03418 0.85449-0.15381 1.55176-0.6084 0.70068-0.45801 1.17578-1.17236 0.2666-0.40332 0.43408-0.89209 0.1709-0.49219 0.22559-0.96728 0.01367-0.18457 0.01367-0.92627l0-0.7417 0.08545-0.02735q0.18115-0.05469 0.38281-0.21533 0.20508-0.16406 0.34522-0.34521 0.24951-0.33496 0.31787-0.73487 0.07178-0.3999-0.04102-0.80322-0.15381-0.51953-0.56738-0.86133-0.41016-0.34521-0.92969-0.38623-0.51611-0.04102-0.95019 0.16748-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599-0.02734 0.11279-0.04102 0.18457-0.01367 0.06836-0.01367 0.27686 0 0.25293 0.02051 0.37256 0.02051 0.11621 0.10596 0.31445 0.12646 0.29395 0.37597 0.55371 0.25293 0.25635 0.53321 0.36914l0.11279 0.04102 0 0.82715q-0.01367 0.65625-0.02735 0.83398-0.01367 0.17432-0.08544 0.42725-0.18115 0.65625-0.65967 1.16894-0.4751 0.50928-1.11768 0.74854-0.48877 0.18115-1.02881 0.18115-0.54004 0-1.02881-0.19482-0.29395-0.09912-0.52636-0.25294-0.229-0.15381-0.46826-0.37939-0.4751-0.4751-0.70069-1.09033-0.04102-0.09912-0.08545-0.25977-0.04102-0.16064-0.04101-0.18115 0-0.02051 0.12646-0.05127 0.33838-0.05469 0.72803-0.20849 1.06641-0.40674 1.76367-1.34327 0.70068-0.93994 0.81348-2.08496 0.01367-0.22559 0.01367-1.59619l-0.01367-1.38769-0.04102-0.15381q-0.14014-0.48877-0.47851-0.81348-0.46143-0.44775-1.06299-0.48877l-0.15381-0.01367 0-0.05469q0-0.04443-0.04443-0.14697-0.04102-0.10596-0.08203-0.14697-0.11279-0.14014-0.26661-0.19825-0.06836-0.02734-0.19482-0.02734-0.2085 0-0.37256 0.1333-0.16064 0.1333-0.18799 0.3418-0.02734 0.09912-0.02734 0.68701 0 0.58789 0.01367 0.68701 0.05469 0.23584 0.24951 0.36914 0.19824 0.1333 0.42383 0.09229 0.10938-0.01367 0.18115-0.04102 0.11279-0.05811 0.20166-0.1914 0.09229-0.1333 0.10596-0.25635l0-0.07178 0.09912 0.01367q0.14014 0.01367 0.24951 0.09912 0.11279 0.08203 0.18457 0.22217l0.04102 0.08545 0 1.4834q0 1.09375-0.01367 1.31934-0.01367 0.22217-0.09912 0.48535l0 0.01709q-0.18115 0.65625-0.65967 1.16894-0.4751 0.50928-1.11768 0.74854-0.4751 0.18115-1.02197 0.18115-0.54688 0-1.03565-0.19482-0.29395-0.09912-0.52636-0.25293-0.229-0.15381-0.46826-0.3794-0.70068-0.68359-0.8545-1.66455-0.01367-0.14014-0.01367-1.52783l0-1.37061 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596l0.09912-0.01367 0.01367 0.05469q0.02734 0.21191 0.15381 0.34521 0.12646 0.1333 0.32129 0.16065 0.08545 0.02734 0.18799 0.00683 0.10596-0.02051 0.18115-0.05468 0.07861-0.0376 0.14697-0.1128 0.07178-0.07861 0.11621-0.16064l0.04102-0.09912 0.01367-1.41504-0.04102-0.0957q-0.08545-0.19824-0.25293-0.30079-0.16748-0.10596-0.37939-0.06494z m9.08838 4.70313q0.18115 0.09912 0.28027 0.29394 0.05469 0.09912 0.05469 0.23242 0 0.1333-0.05127 0.23243-0.04785 0.0957-0.11963 0.17431-0.06836 0.0752-0.15039 0.11963-0.09912 0.05469-0.25976 0.05469-0.16064 0-0.25977-0.05469-0.2666-0.14014-0.31445-0.43408-0.04785-0.29395 0.17431-0.50586 0.12646-0.12646 0.30078-0.15381 0.17774-0.02734 0.34522 0.04102z"
                    fill="#F6F5F3"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="Card Text Physician-attorney review"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[9px] p-[22px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="Card Title Physician-attorney review"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.35px] text-left [white-space:nowrap]"
              >
                Physician-attorney review
              </div>
              <div
                data-pencil-name="Card Desc Physician-attorney review"
                className="text-[13.5px]/[22px] box-border w-full text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                A licensed physician reviews every AI output before it reaches your inbox. Nothing
                ships unchecked.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        data-pencil-name="Compliance Strip"
        className="[box-sizing:content-box] w-[1440px] h-[86px] shrink-0 flex flex-row gap-0 p-[36px_100px] justify-between items-center bg-[#08080A] [border-width:1px_0px_1px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_-0.5px_0px]"
      >
        <div
          data-pencil-name="Compliance Text"
          className="text-[12.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
        >
          Independently audited and compliant with the standards healthcare organizations require
        </div>
        <div
          data-pencil-name="Compliance Items"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[28px] justify-start items-center"
        >
          <div
            data-pencil-name="Compliance Item SOC 2 Type I"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="Compliance Icon SOC 2 Type I"
              data-icon-name="badge-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Compliance Label SOC 2 Type I"
              className="text-[11.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              SOC 2 Type I
            </div>
          </div>
          <div
            data-pencil-name="Compliance Item ISO 27001"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="Compliance Icon ISO 27001"
              data-icon-name="badge-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Compliance Label ISO 27001"
              className="text-[11.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              ISO 27001
            </div>
          </div>
          <div
            data-pencil-name="Compliance Item HIPAA"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="Compliance Icon HIPAA"
              data-icon-name="badge-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Compliance Label HIPAA"
              className="text-[11.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              HIPAA
            </div>
          </div>
          <div
            data-pencil-name="Compliance Item AES-256"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="Compliance Icon AES-256"
              data-icon-name="badge-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Compliance Label AES-256"
              className="text-[11.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              AES-256
            </div>
          </div>
          <div
            data-pencil-name="Compliance Item GDPR"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="Compliance Icon GDPR"
              data-icon-name="badge-check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                fill="#5C6067"
              ></path>
            </svg>
            <div
              data-pencil-name="Compliance Label GDPR"
              className="text-[11.5px]/[normal] box-border text-[#7C8087] font-[Inter,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
            >
              GDPR
            </div>
          </div>
        </div>
      </div>
      <div
        data-pencil-name="Features Section"
        className="box-border w-full h-fit shrink-0 flex flex-col gap-[26px] p-[96px_100px] justify-start items-center bg-[#08080A]"
      >
        <div
          data-pencil-name="Features Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="Features Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            WHAT WE CHECK
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Features Headline"
          className="text-[40px]/[45px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-center"
        >
          Every clause that costs physicians money.
        </motion.div>
        <div
          data-pencil-name="Features Sub"
          className="text-[14.5px]/[24px] box-border w-[560px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-center"
        >
          A standard review covers all of it. Nothing is optional, nothing is behind an upgrade.
        </div>
        <div
          data-pencil-name="Features Grid"
          className="box-border w-full h-fit shrink-0 flex flex-col gap-[44px] p-[36px_0px_0px_0px] justify-start items-center"
        >
          <div
            data-pencil-name="Feature Row 0"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[80px] justify-center items-start"
          >
            <div
              data-pencil-name="Feature Tail insurance exposure"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Tail insurance exposure"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Tail insurance exposure"
                  data-icon-name="shield-alert"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M6.84619 0.60156q-0.34863 0.02734-0.68701 0.30762-0.51611 0.42041-1.00147 0.70068-0.48193 0.28027-1.01513 0.4751-0.30762 0.11279-0.58789 0.1709-0.28027 0.05469-0.66992 0.08203-0.23926 0.01367-0.36573 0.07178-0.19482 0.06836-0.37939 0.22217-0.18115 0.15381-0.26319 0.34863l-0.01367 0.03076q-0.07178 0.12646-0.08545 0.22217-0.01367 0.15381-0.02734 0.60156l0 1.78076q0 2.25244 0.01367 2.46094 0.14014 1.6543 1.10742 2.88477 0.14014 0.16748 0.43409 0.46142 0.29395 0.29394 0.48877 0.44775 0.92285 0.7417 2.2832 1.27491 0.46143 0.18115 0.65625 0.23926 0.23926 0.05469 0.43408 0.01367 0.16748-0.02734 0.5332-0.15381 1.35693-0.51953 2.27979-1.20313 0.37939-0.2666 0.71435-0.60498 1.37402-1.3706 1.54151-3.37353 0.01367-0.23584 0.01367-2.46094 0-2.22852-0.02734-2.35498-0.07178-0.32129-0.31787-0.56396-0.24268-0.24609-0.5503-0.31788-0.09912-0.02734-0.37939-0.04101-0.48877-0.02734-0.96387-0.18115-0.81348-0.2666-1.55518-0.77246-0.2666-0.18115-0.64257-0.48877-0.42041-0.33496-0.96729-0.28028z m0.43408 1.34326q0.64258 0.51953 1.32959 0.86817 1.2168 0.61865 2.25244 0.68701l0.21192 0-0.01367 4.31348q0 0.33496-0.02735 0.50244-0.22559 1.34326-1.1416 2.27637-0.91602 0.92969-2.66601 1.57226l-0.21192 0.08545-0.18115-0.05469q-2.32422-0.85449-3.2334-2.22851-0.47852-0.71436-0.63232-1.63721-0.02734-0.18115-0.02735-0.50244l-0.01367-4.32715 0.19483 0q0.86816-0.05469 1.84912-0.48193 0.98096-0.42725 1.83545-1.12793 0.16748-0.14014 0.19482-0.14014 0.02734 0 0.28027 0.19482z m-0.37939 2.15674q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.25634l0 2.46436 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-2.33789q0-0.2666-0.02051-0.3418-0.02051-0.07861-0.07861-0.16064l-0.01367-0.01367q-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z m-0.05469 4.67578q-0.2085 0.05811-0.32129 0.22559-0.11279 0.16748-0.09912 0.37256 0.01367 0.20166 0.15381 0.35547 0.08545 0.08203 0.15381 0.12646 0.21191 0.0957 0.42041 0.03418 0.2085-0.06494 0.33496-0.24609 0.12646-0.18115 0.08545-0.40674-0.01367-0.10938-0.05127-0.17773-0.03418-0.07178-0.11963-0.14014-0.08203-0.07178-0.16064-0.11279-0.0752-0.04443-0.19483-0.05127-0.11621-0.00684-0.20166 0.0205z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Tail insurance exposure"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Tail insurance exposure
              </div>
              <div
                data-pencil-name="Feature Desc Tail insurance exposure"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Five-year tail provisions that cost $8,000–$15,000 are flagged with the dollar
                figure attached.
              </div>
            </div>
            <div
              data-pencil-name="Feature Non-compete scope"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Non-compete scope"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Non-compete scope"
                  data-icon-name="map-pin"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M6.71973 0.60156q-0.81006 0.02734-1.56885 0.31446-0.75537 0.28711-1.41162 0.80664-0.19824 0.15381-0.48535 0.44775-0.28711 0.29395-0.44092 0.48877-0.42041 0.57422-0.67334 1.17578-0.24951 0.60156-0.34863 1.31592-0.04102 0.23926-0.03418 0.68017 0.00684 0.44092 0.03418 0.69385 0.14014 0.88184 0.56054 1.79102 0.50586 1.07666 1.44922 2.27637 0.94678 1.19629 2.19092 2.31738 0.22559 0.19482 0.32129 0.27343 0.09912 0.0752 0.19824 0.11622 0.22217 0.11279 0.48877 0.11279 0.2666 0 0.48877-0.11279 0.11279-0.04101 0.19482-0.10254 0.08545-0.06494 0.31104-0.25977 0.96387-0.86816 1.79101-1.83203 0.82715-0.96728 1.37403-1.86621 0.75537-1.27148 0.98437-2.42676 0.23242-1.15527-0.06152-2.29004-0.35205-1.35693-1.35693-2.36523-0.36572-0.37939-0.74512-0.64258-0.37598-0.2666-0.8374-0.46484-1.12109-0.51611-2.42334-0.44776z m0.88183 1.18946q0.67334 0.09912 1.28174 0.42041 0.6084 0.32129 1.0835 0.82714 0.68701 0.71436 0.95361 1.66114 0.2666 0.94336 0.08203 1.90722-0.34863 1.72266-2.26611 3.92041-0.32129 0.36572-1.00147 1.03907-0.68018 0.66992-0.73486 0.66992-0.05469 0-0.73486-0.66992-0.68018-0.67334-1.00147-1.03907-1.79102-2.05762-2.21142-3.70849-0.08545-0.32129-0.1128-0.69385-0.02734-0.37256 0-0.69385 0.07178-0.66992 0.34864-1.29199 0.28027-0.62549 0.75879-1.11426 0.51611-0.54688 1.20312-0.875 0.68701-0.33154 1.44238-0.38623 0.12646-0.01367 0.44776 0 0.32129 0.01367 0.46142 0.02735z m-0.85449 1.72265q-0.7417 0.08545-1.28857 0.57422-0.5708 0.50244-0.7417 1.26123-0.04102 0.15381-0.04102 0.42041 0 0.26318 0.02734 0.43408 0.11279 0.72803 0.63233 1.25782 0.44775 0.46143 1.06299 0.62548 0.61523 0.16064 1.22363-0.00683 0.6084-0.1709 1.05957-0.63233 0.50244-0.5332 0.62891-1.24414 0.01367-0.1709 0.01367-0.43408 0-0.2666-0.04102-0.40674-0.1709-0.77246-0.7417-1.2749-0.46484-0.40674-1.0664-0.5332-0.15381-0.02734-0.3794-0.04102-0.22217-0.01367-0.34863 0z m0.51953 1.18946q0.29395 0.05811 0.54688 0.30761 0.18115 0.18457 0.26318 0.37256 0.08545 0.18799 0.08545 0.44092 0 0.5332-0.39307 0.88183-0.32129 0.29395-0.76904 0.29395-0.44775 0-0.76904-0.29395-0.44775-0.40674-0.3794-1.0083 0.01367-0.2085 0.09571-0.36914 0.08545-0.16406 0.25293-0.33154 0.1709-0.16748 0.35205-0.24268 0.18115-0.07861 0.43408-0.07861 0.16748 0 0.28027 0.02735z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Non-compete scope"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Non-compete scope
              </div>
              <div
                data-pencil-name="Feature Desc Non-compete scope"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Radius and duration benchmarked against what is actually enforceable in your state.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Feature Row 1"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[80px] justify-center items-start"
          >
            <div
              data-pencil-name="Feature Compensation &amp; RVU"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Compensation &amp; RVU"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Compensation &amp; RVU"
                  data-icon-name="calculator"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-4.95605 0-4.78857-0.02734-4.95605-0.05811-0.3623-0.25293-0.66309-0.19482-0.3042-0.50245-0.49902-0.36572-0.25293-0.82714-0.28028-0.18115-0.02734-3.65381-0.02734-3.47266 0-3.65381 0.02734z m7.42041 1.20313q0.2085 0.11279 0.29394 0.3247 0.02734 0.06836 0.02735 0.6836l0 4.18701 0 4.18701q0 0.61523-0.0376 0.70069-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17432-0.03418-0.08545-0.03418-0.70068l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 3.68116-0.01367l3.61279 0.01367 0.09912 0.04102z m-6.27197 1.14843q-0.23926 0.08545-0.34522 0.32471-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.40674 0.03418l2.15674 0 2.15674 0q0.32129 0 0.40332-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-2.47803 0q-2.47803 0-2.53271 0.02734z m0.04101 2.31055q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.39307 0.1333 0.17432 0.36914 0.21533 0.29395 0.04102 0.51953-0.18115 0.19482-0.21191 0.14697-0.49903-0.04785-0.28711-0.31445-0.41357-0.07178-0.04102-0.19824-0.05469-0.12305-0.01367-0.2085 0z m2.33789 0q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242-0.0957 0.24951 0.04444 0.48877 0.14014 0.23926 0.41699 0.28711 0.28027 0.04785 0.49561-0.16064 0.21875-0.21191 0.16406-0.51953-0.02734-0.16748-0.15381-0.29395-0.11279-0.11279-0.25977-0.15381-0.14697-0.04102-0.30078-0.01367z m2.33789 0q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.15039 0.1333-0.12646 0.16748-0.11279 0.38623 0.01367 0.21533 0.18115 0.36914 0.12646 0.12646 0.30762 0.15381 0.29395 0.05469 0.50928-0.16065 0.21875-0.21875 0.16406-0.51269-0.05469-0.29395-0.34863-0.42041-0.07178-0.04102-0.18457-0.04785-0.10938-0.00684-0.18116 0.00683z m-4.62109 2.33789q-0.23584 0.02734-0.38281 0.23242-0.14697 0.20166-0.09229 0.44092 0.02734 0.18115 0.15381 0.29395 0.16748 0.16748 0.42041 0.16748 0.14014 0 0.23926-0.04102 0.2085-0.09912 0.28369-0.29394 0.07861-0.19824 0.03076-0.39991-0.04785-0.20508-0.23242-0.32128-0.18115-0.11963-0.42041-0.07862z m2.32422 0q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.30762 0.05469-0.29395-0.15723-0.50244-0.2085-0.21191-0.51611-0.15723z m2.32422 0q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912 0 2.63184 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0.01367-1.23388q0-1.2168-0.01367-1.31592-0.05469-0.24951-0.24609-0.38281-0.18799-0.1333-0.44092-0.09229z m-4.74414 2.35156q-0.18457 0.0581-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.17432 0.41357 0.17432 0.17432 0.42041 0.16065 0.24609-0.01367 0.3999-0.16748 0.09912-0.09912 0.12646-0.18115 0.02734-0.08545 0.02735-0.23926 0-0.15381-0.04102-0.23926-0.08545-0.18115-0.2666-0.2666-0.08545-0.04102-0.23242-0.05469-0.14697-0.01367-0.21533 0.02734z m2.36523-0.01367q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.23926 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.15381 0.15381 0.3999 0.16748 0.24609 0.01367 0.42041-0.16065 0.17432-0.17432 0.17432-0.41357 0-0.23926-0.16748-0.3999-0.16748-0.16064-0.39307-0.17432-0.14014 0-0.18115 0.01367z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Compensation &amp; RVU"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Compensation &amp; RVU
              </div>
              <div
                data-pencil-name="Feature Desc Compensation &amp; RVU"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Base salary, wRVU conversion, and bonus thresholds compared across your specialty.
              </div>
            </div>
            <div
              data-pencil-name="Feature Call &amp; coverage duties"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Call &amp; coverage duties"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Call &amp; coverage duties"
                  data-icon-name="clock-alert"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M6.59326 0.60156q-0.99463 0.05811-1.92431 0.42383-0.92969 0.3623-1.7295 1.00488-0.16748 0.12646-0.47509 0.44092-0.30762 0.31445-0.43409 0.46826-0.95361 1.18945-1.28857 2.63184-0.37939 1.62354 0.11279 3.24707 0.46143 1.56885 1.6167 2.72412 1.15527 1.15527 2.72412 1.60303 1.97217 0.57422 3.91699-0.09912 0.37939-0.12305 0.52637-0.21534 0.14697-0.09228 0.21875-0.23242 0.08203-0.19482 0.04102-0.38965-0.08545-0.33838-0.40674-0.42041-0.11279-0.04101-0.21875-0.0205-0.10254 0.02051-0.31445 0.10253-1.71924 0.65967-3.4419 0.15381-1.32959-0.37598-2.30371-1.39111-0.97412-1.01514-1.30908-2.37207-0.23926-0.95361-0.11279-1.93115 0.12646-0.98096 0.60156-1.84912 0.57422-1.03564 1.52441-1.7295 0.95361-0.69385 2.11572-0.91601 0.43408-0.07178 0.98096-0.07178 0.30762 0 0.49561 0.01367 0.19141 0.01367 0.44433 0.05811 0.9502 0.18115 1.79785 0.70068 0.84766 0.51611 1.42188 1.28516 0.36231 0.49219 0.62891 1.06641 0.09912 0.19482 0.17431 0.29394 0.07861 0.0957 0.20508 0.13672 0.18115 0.07178 0.36914 0.02393 0.18799-0.05127 0.30762-0.20508 0.11963-0.15381 0.11963-0.34864 0-0.19824-0.22559-0.6289-0.78271-1.55518-2.21142-2.50537-1.42871-0.95361-3.16163-1.05274-0.39307-0.02734-0.78613 0z m0.25293 2.33789q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.83496 0.04102 0.08545q0.05811 0.0957 0.12646 0.15381 0.08545 0.06836 0.36572 0.22217l0.90918 0.46142q1.20312 0.60498 1.30225 0.63233 0.23926 0.06836 0.45459-0.05469 0.21533-0.12646 0.27344-0.3794 0.04102-0.18115-0.04102-0.37939-0.04443-0.0957-0.11621-0.15039-0.06836-0.05811-0.31787-0.18457l-1.83545-0.93652-0.01367-3.30518-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m4.63477 3.51368q-0.23926 0.08545-0.35205 0.33837l-0.04102 0.08204-0.01367 1.51416q0 1.18945 0.01367 1.44238 0.01367 0.24951 0.05469 0.3623 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279 0.19824 0.08203 0.39307 0.03418 0.19482-0.04785 0.32129-0.21875l0.01367-0.01367q0.0581-0.08203 0.07178-0.15381 0.01367-0.11279 0.02734-0.43408l-0.01367-2.81299-0.04102-0.09912q-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02735z m0 5.25q-0.18457 0.0581-0.29053 0.21191-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.17432 0.41357 0.17432 0.17432 0.42041 0.16065 0.24609-0.01367 0.3999-0.16748 0.09912-0.09912 0.12646-0.18115 0.02734-0.08545 0.02735-0.23926 0-0.15381-0.04102-0.23926-0.08545-0.18115-0.2666-0.2666-0.08545-0.04102-0.23242-0.05469-0.14697-0.01367-0.21533 0.02735z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Call &amp; coverage duties"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Call &amp; coverage duties
              </div>
              <div
                data-pencil-name="Feature Desc Call &amp; coverage duties"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Unpaid call weekends buried in Exhibit B are pulled out and priced.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Feature Row 2"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[80px] justify-center items-start"
          >
            <div
              data-pencil-name="Feature Signing bonus clawback"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Signing bonus clawback"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Signing bonus clawback"
                  data-icon-name="undo-2"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M5.09619 1.77734q-0.08545 0.01367-0.14014 0.05127-0.05469 0.03418-1.58251 1.57227-0.9502 0.93994-1.2544 1.24756-0.30078 0.30762-0.31445 0.3623-0.05469 0.09912-0.05469 0.23926 0 0.14014 0.04102 0.23926 0.02734 0.05469 0.32812 0.3623 0.3042 0.30762 1.2544 1.26123l0.23925 0.23584q0.76904 0.77246 0.99463 0.98096 0.29395 0.29395 0.40332 0.36572 0.08545 0.05469 0.19824 0.04102l0.04102 0q0.15381 0 0.25293-0.04102 0.19482-0.09912 0.27686-0.31445 0.08545-0.21875 0.01709-0.42725-0.02734-0.07178-0.18458-0.23925-0.15381-0.16748-0.86474-0.88184l-1.0083-1.0083 4.604 0.01367q0.43408 0.01367 0.5332 0.02734 0.82715 0.15381 1.39795 0.70752 0.57422 0.55371 0.75879 1.3501 0.02734 0.16748 0.04102 0.42725 0.01367 0.25977-0.01367 0.42724-0.11279 0.85449-0.70069 1.4834-0.57422 0.60156-1.44238 0.78613-0.08203 0.01367-1.35693 0.02735l-1.27491 0.01367-0.09912 0.04102q-0.23584 0.11279-0.32129 0.35205-0.08203 0.23584 0.02735 0.46142 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 1.17578 0.01367q1.17578 0 1.37061-0.01367 0.84082-0.08545 1.56201-0.5127 0.72119-0.42725 1.20996-1.12451 0.31104-0.46143 0.48535-1.01514 0.17432-0.55371 0.17432-1.11425 0-0.79639-0.31445-1.51075-0.31445-0.71436-0.88184-1.25439-0.56738-0.54004-1.30908-0.81689-0.29395-0.09912-0.68701-0.1709-0.11279-0.02734-0.53321-0.02735l-4.78515-0.01367 1.0083-1.0083q0.71094-0.72803 0.86474-0.88867 0.15723-0.16064 0.18458-0.23242 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.19483 0.01367z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Signing bonus clawback"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Signing bonus clawback
              </div>
              <div
                data-pencil-name="Feature Desc Signing bonus clawback"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Prorated repayment terms that quietly turn a bonus into a loan.
              </div>
            </div>
            <div
              data-pencil-name="Feature Termination without cause"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Termination without cause"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Termination without cause"
                  data-icon-name="log-out"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.07178 0.02734 0.30762 0.02735l2.60449 0.01367 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-2.31055-0.01367q-0.2666 0-0.34521-0.01367-0.0752-0.01367-0.14356-0.07178l-0.01367 0q-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 2.63184-0.01367 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-1.34326 0q-1.35693 0-1.46973 0.02735z m6.59326 2.31054q-0.19482 0.05469-0.32812 0.23242-0.1333 0.17432-0.11963 0.36914l0 0.01368q0.01367 0.12646 0.05469 0.19824 0.05811 0.0957 0.2666 0.32129l1.76367 1.77734-5.75244 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 5.75244 0-0.99463 0.99463q-0.65625 0.66992-0.83056 0.85449-0.17432 0.18115-0.20508 0.24951-0.10938 0.23926-0.01367 0.46485 0.09912 0.22217 0.32128 0.32128 0.22559 0.0957 0.46485-0.01367 0.06836-0.04443 0.33496-0.29394 0.2666-0.25293 1.30224-1.28858 1.52442-1.52783 1.56885-1.59619 0.02734-0.05811 0.03418-0.10596 0.00684-0.04785 0.00684-0.16064 0-0.11279-0.00684-0.16064-0.00684-0.04785-0.03418-0.10596-0.04443-0.06836-1.56885-1.59619-1.0083-1.02197-1.28857-1.27832-0.28027-0.25977-0.35205-0.29395-0.06836-0.0376-0.18115-0.05127-0.10938-0.01367-0.19483 0z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Termination without cause"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Termination without cause
              </div>
              <div
                data-pencil-name="Feature Desc Termination without cause"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Notice periods that let a hospital move you out in 30 days with no severance.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Feature Row 3"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[80px] justify-center items-start"
          >
            <div
              data-pencil-name="Feature Malpractice &amp; tail transfer"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Malpractice &amp; tail transfer"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Malpractice &amp; tail transfer"
                  data-icon-name="umbrella"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M6.90088 0.60156q-0.18115 0.02734-0.32129 0.16748-0.09912 0.09912-0.12646 0.19825-0.02734 0.0957-0.02735 0.42041l-0.01367 0.38964-0.23926 0.02735q-1.31592 0.1709-2.45752 0.83056-1.13818 0.65625-1.93799 1.6919-0.79639 1.03564-1.14843 2.32422-0.12646 0.50244 0.10595 0.92285 0.23242 0.42041 0.72119 0.56055 0.08545 0.01367 0.46143 0.02734l4.5083 0.01367 0 3.80762 0.05469 0.15381q0.1709 0.54688 0.58789 0.88183 0.12646 0.11279 0.30078 0.20508 0.17773 0.08887 0.33154 0.1333 0.44775 0.12305 0.89551 0.00684 0.44775-0.11963 0.78272-0.44092 0.33838-0.32471 0.46142-0.77246 0.14014-0.48877 0.01709-0.75537-0.12646-0.22217-0.38623-0.28369-0.25977-0.06494-0.45459 0.07519-0.12646 0.08203-0.1914 0.19483-0.06152 0.11279-0.0752 0.29394-0.04102 0.33496-0.28027 0.4751-0.16748 0.11279-0.36573 0.09228-0.19482-0.02051-0.33496-0.15381-0.14014-0.1333-0.16748-0.32812-0.02734-0.11279-0.02734-1.84912l0-1.73633 4.15625-0.01367q0.51953 0 0.68701-0.01367 0.12647-0.01367 0.25293-0.05811 0.23926-0.0957 0.42041-0.27685 0.22217-0.23926 0.29053-0.54004 0.07178-0.30078-0.01026-0.63574-0.33838-1.20654-1.08691-2.22168-0.74853-1.01514-1.81152-1.67139-1.22021-0.75537-2.64551-0.93994l-0.23926-0.02735-0.01367-0.38964q0-0.31104-0.02051-0.39307-0.02051-0.08545-0.10596-0.19483-0.08545-0.11279-0.23925-0.16748-0.15381-0.05811-0.30762-0.03076z m0.67334 2.35156q1.52441 0.15381 2.78564 1.13477 0.18115 0.14014 0.46143 0.42041 0.28027 0.28027 0.42041 0.46143 0.67334 0.86816 0.95361 1.82177l0.04102 0.18116q0.01367 0.01367-0.7417 0.02734l-4.49463 0-4.49463 0q-0.75537-0.01367-0.7417-0.02734l0.05469-0.21192q0.28027-0.93652 0.93994-1.79101 0.12646-0.18115 0.3999-0.44776 0.27344-0.2666 0.44092-0.40674 1.25781-0.99463 2.79932-1.16211 0.23926-0.02734 0.58789-0.02734 0.34863 0 0.58789 0.02734z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Malpractice &amp; tail transfer"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Malpractice &amp; tail transfer
              </div>
              <div
                data-pencil-name="Feature Desc Malpractice &amp; tail transfer"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                Who pays for prior-acts coverage — and what happens when you change employers.
              </div>
            </div>
            <div
              data-pencil-name="Feature Benefits, dollarized"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[11px] p-[0px_20px] justify-start items-center"
            >
              <div
                data-pencil-name="Feature Icon Box Benefits, dollarized"
                className="box-border w-[40px] h-[40px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F14] [outline:1px_solid_#E03A2F26] [outline-offset:-0.5px] rounded-[10px]"
              >
                <svg
                  data-pencil-name="Feature Icon Benefits, dollarized"
                  data-icon-name="receipt"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[18px] shrink-0 h-[18px]"
                >
                  <path
                    d="M2.2251 0.58789q-0.29395 0.07178-0.42041 0.33496l-0.04102 0.09912 0 11.95606 0.04102 0.09912q0.04443 0.08203 0.11279 0.16064 0.07178 0.0752 0.14697 0.1128 0.07861 0.03418 0.18799 0.05468 0.11279 0.02051 0.19483 0 0.08545-0.02051 0.56396-0.25976l0.48877-0.23584 0.48877 0.23584q0.40674 0.19482 0.5332 0.24609 0.12646 0.04785 0.23584 0.02051 0.11279-0.02734 0.59131-0.2666l0.48877-0.23584 1.02197 0.50244 0.28028 0 1.02197-0.50244 0.48877 0.23584q0.47852 0.23926 0.58789 0.2666 0.11279 0.02734 0.23926-0.02051 0.12646-0.05127 0.5332-0.24609l0.48877-0.23584 0.48877 0.23584q0.42041 0.21191 0.55371 0.25293 0.1333 0.04101 0.25977 0 0.28027-0.08545 0.40673-0.33496l0.02735-0.08545 0.01367-11.91504-0.04102-0.0957q-0.0581-0.15381-0.19824-0.26661-0.14014-0.11279-0.34863-0.11279l-0.14014 0-1.02197 0.51953-1.02197-0.51953-0.12647 0q-0.14014 0-0.21191 0.02734-0.06836 0.02734-0.51611 0.25293l-0.46143 0.22217-1.0083-0.50244-0.30762 0-1.0083 0.50244-0.46143-0.22217q-0.44775-0.22559-0.51953-0.25293-0.06836-0.02734-0.20849-0.02734l-0.12647 0-1.02197 0.51953-0.51953-0.25293q-0.40332-0.21191-0.51611-0.24609-0.11279-0.03418-0.23926-0.00684l0-0.01367z m2.93945 1.4834l0.49219 0.25293 0.34863 0 0.99463-0.50586 0.99463 0.50586 0.34863 0 0.98096-0.50586 1.0083 0.50586 0.33496 0 0.40674-0.2085 0 4.88428q0 4.8877-0.00684 4.88769-0.00684 0-0.20508-0.09912l-0.19482-0.11279-0.33496 0-0.99463 0.50586-1.0083-0.50586-0.33496 0-0.99463 0.50586-0.99463-0.50586-0.33496 0-1.0083 0.50586-0.99463-0.50586-0.33496 0-0.19482 0.11279q-0.19824 0.09912-0.20508 0.09912-0.00684 0-0.00684-4.88769l0-4.88428 0.40674 0.2085 0.33496 0 0.99463-0.50586 0.50244 0.25293z m1.73633 1.14844q-0.18115 0.02734-0.32129 0.18115-0.09912 0.08545-0.12646 0.19141-0.02734 0.10254-0.02735 0.2871l0 0.19483-0.2666 0q-0.54688 0-0.81006 0.08545-0.43408 0.12305-0.75195 0.44092-0.31445 0.31445-0.4375 0.74853-0.18457 0.64258 0.10937 1.25781 0.15381 0.32471 0.44092 0.56397 0.28711 0.23584 0.65283 0.34863 0.11279 0.02734 0.20166 0.04102 0.09229 0.01367 0.41358 0.01367l0.44775 0 0 1.17578-1.90381 0.01367-0.09912 0.04102q-0.08203 0.04443-0.16064 0.11621-0.0752 0.06836-0.11963 0.13672-0.12305 0.2666 0 0.5332 0.12646 0.2666 0.42041 0.30762 0.09912 0.02734 0.98096 0.02734l0.88183 0 0 0.19482q0 0.19824 0.02735 0.29737 0.02734 0.0957 0.12646 0.19482 0.18115 0.16748 0.42041 0.16748 0.23926 0 0.42041-0.16748 0.09912-0.09912 0.12647-0.19482 0.02734-0.09912 0.02734-0.29737l0-0.19482 0.42041-0.01367q0.34863 0 0.51611-0.02734 0.1709-0.02734 0.36572-0.12647 0.58789-0.25293 0.86817-0.84766 0.28027-0.59473 0.11279-1.20996-0.11279-0.39307-0.39306-0.70068-0.28027-0.30762-0.65967-0.46143-0.18115-0.07178-0.3418-0.09228-0.16064-0.02051-0.4956-0.02051l-0.39307 0 0-1.17578 1.90381-0.01367 0.09912-0.04102q0.08203-0.04443 0.15723-0.11279 0.07861-0.07178 0.11279-0.14014 0.0376-0.07178 0.05127-0.18115 0.04102-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-1.89014-0.01367 0-0.19483q0-0.21191-0.02734-0.29394-0.07178-0.19824-0.25293-0.29395-0.18115-0.09912-0.39307-0.07177z m-0.4751 2.61816l0 0.58789-0.29394 0q-0.33496 0-0.46143-0.03418-0.12646-0.03418-0.23926-0.14697-0.16748-0.15381-0.17431-0.38281-0.00684-0.23242 0.14697-0.417 0.09912-0.12646 0.28027-0.16748 0.08545-0.02734 0.40674-0.02734l0.33496 0 0 0.58789z m1.83545 1.76367q0.30762 0.04102 0.43408 0.32129 0.04102 0.09912 0.04102 0.23926 0 0.32129-0.23926 0.48877-0.0957 0.05811-0.20166 0.07861-0.10596 0.02051-0.38623 0.02051l-0.33496 0 0-1.17578 0.29394 0q0.28027 0 0.39307 0.02734z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Feature Title Benefits, dollarized"
                className="text-[16px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-center [white-space:nowrap]"
              >
                Benefits, dollarized
              </div>
              <div
                data-pencil-name="Feature Desc Benefits, dollarized"
                className="text-[13px]/[21px] box-border w-[340px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-center"
              >
                CME, relocation, and PTO converted to cash so the package actually compares.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-pencil-name="Testimonials Section"
        className="box-border w-full h-fit shrink-0 flex flex-col gap-[36px] p-[96px_100px] justify-start items-start bg-[#08080A]"
      >
        <div
          data-pencil-name="Testi Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="Testi Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            TESTIMONIALS
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Testi Headline"
          className="text-[40px]/[45px] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-left [white-space:nowrap]"
        >
          Hear it from the physicians who signed.
        </motion.div>
        <div
          data-pencil-name="Testi Sub"
          className="text-[14.5px]/[24px] box-border w-[540px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
        >
          New attendings use RedlineMD to walk into their first contract with the same information
          their employer already has.
        </div>
        <motion.div whileHover={{ y: -4, borderColor: "#2A2F36" }} transition={{ duration: 0.25 }} 
          data-pencil-name="Testimonial Card"
          className="transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[26px] p-[36px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[16px]"
        >
          <div
            data-pencil-name="Testi Card Top"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
          >
            <div
              data-pencil-name="Testi Author Block"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[14px] justify-start items-center"
            >
              <div
                data-pencil-name="Testi Avatar"
                className="box-border w-[52px] shrink-0 h-[52px] flex flex-row gap-0 justify-start items-start bg-[url('https://images.unsplash.com/photo-1758874384753-b9672af6b063?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTMxOTQ0MzN8&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080')] bg-no-repeat bg-cover bg-center [outline:1px_solid_#3A4048] [outline-offset:-0.5px] rounded-[999px] overflow-hidden"
              ></div>
              <div
                data-pencil-name="Testi Author Text"
                className="box-border w-fit shrink-0 h-fit flex flex-col gap-[3px] justify-start items-start"
              >
                <div
                  data-pencil-name="Testi Name"
                  className="text-[14.5px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  Dr. Alina Reyes, MD
                </div>
                <div
                  data-pencil-name="Testi Role"
                  className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Family Medicine · First contract, Ohio
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Testi Rating"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[6px] justify-start items-end"
            >
              <div
                data-pencil-name="Testi Stars"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[3px] justify-start items-start"
              >
                <svg
                  data-pencil-name="Testi Star 0"
                  data-icon-name="star-fill"
                  data-icon-set="phosphor"
                  viewBox="0 0 14 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
                <svg
                  data-pencil-name="Testi Star 1"
                  data-icon-name="star-fill"
                  data-icon-set="phosphor"
                  viewBox="0 0 14 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
                <svg
                  data-pencil-name="Testi Star 2"
                  data-icon-name="star-fill"
                  data-icon-set="phosphor"
                  viewBox="0 0 14 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
                <svg
                  data-pencil-name="Testi Star 3"
                  data-icon-name="star-fill"
                  data-icon-set="phosphor"
                  viewBox="0 0 14 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
                <svg
                  data-pencil-name="Testi Star 4"
                  data-icon-name="star-fill"
                  data-icon-set="phosphor"
                  viewBox="0 0 14 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M12.79688 6.28906l-2.46094 2.07813 0.76562 3.17187q0.10938 0.4375-0.16406 0.79297-0.27344 0.35547-0.71094 0.35547-0.21875 0-0.4375-0.16406l-2.78906-1.75-2.57031 1.64062q-0.27344 0.16406-0.57422 0.16406-0.30078 0-0.54688-0.1914-0.24609-0.19141-0.35546-0.46485-0.10938-0.27344 0-0.60156l0.71093-2.89844-2.46094-2.13281q-0.21875-0.16406-0.30078-0.4375-0.08203-0.27344 0-0.51953 0.08203-0.24609 0.30078-0.4375 0.21875-0.19141 0.49219-0.19141l3.22656-0.21875 1.25782-3.0625q0.10938-0.21875 0.32812-0.38281 0.21875-0.16406 0.49219-0.16406 0.27344 0 0.49219 0.16406 0.21875 0.16406 0.32812 0.38281l1.20313 3.0625 3.28125 0.21875q0.27344 0 0.49219 0.19141 0.21875 0.19141 0.30078 0.4375 0.08203 0.24609 0 0.51953-0.08203 0.27344-0.30078 0.4375z"
                    fill="#FF6A5A"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Testi Rating Text"
                className="text-[11px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Verified review
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Testi Quote"
            className="text-[23px]/[33px] box-border w-full text-[#E8E6E2] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.5px] text-left"
          >
            “My recruiter sent a 34-page agreement and gave me four days to sign. RedlineMD flagged
            a five-year tail provision worth $11,800 that I would never have caught — and wrote the
            email that got it removed.”
          </div>
          <div
            data-pencil-name="Testi Stats"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start"
          >
            <div
              data-pencil-name="Testi Stat Tail exposure removed from the contract"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[6px] p-[18px] justify-start items-start bg-[#0B0C0F] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
            >
              <div
                data-pencil-name="Testi Stat Value Tail exposure removed from the contract"
                className="text-[24px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
              >
                $11,800
              </div>
              <div
                data-pencil-name="Testi Stat Label Tail exposure removed from the contract"
                className="text-[11.5px]/[17px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Tail exposure removed from the contract
              </div>
            </div>
            <div
              data-pencil-name="Testi Stat From upload to a signed counter-offer"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[6px] p-[18px] justify-start items-start bg-[#0B0C0F] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
            >
              <div
                data-pencil-name="Testi Stat Value From upload to a signed counter-offer"
                className="text-[24px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
              >
                4 days
              </div>
              <div
                data-pencil-name="Testi Stat Label From upload to a signed counter-offer"
                className="text-[11.5px]/[17px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                From upload to a signed counter-offer
              </div>
            </div>
            <div
              data-pencil-name="Testi Stat Base salary negotiated after review"
              className="box-border [flex:1_1_0] h-fit flex flex-col gap-[6px] p-[18px] justify-start items-start bg-[#0B0C0F] [outline:1px_solid_#1E2228] [outline-offset:-0.5px] rounded-[10px]"
            >
              <div
                data-pencil-name="Testi Stat Value Base salary negotiated after review"
                className="text-[24px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left [white-space:nowrap]"
              >
                +$9,000
              </div>
              <div
                data-pencil-name="Testi Stat Label Base salary negotiated after review"
                className="text-[11.5px]/[17px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Base salary negotiated after review
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Testi Card Footer"
            className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[6px_0px_0px_0px] justify-between items-center"
          >
            <div
              data-pencil-name="Testi Footer Note"
              className="text-[11px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Reviews collected from verified RedlineMD customers.
            </div>
            <div
              data-pencil-name="Testi Arrows"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-start"
            >
              <div
                data-pencil-name="Arrow chevron-left"
                className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="Arrow Icon chevron-left"
                  data-icon-name="chevron-left"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[14px] shrink-0 h-[14px]"
                >
                  <path
                    d="M8.59619 2.93945q-0.08545 0.02734-0.19482 0.1128-0.14014 0.12646-0.53321 0.51611l-1.28857 1.2749q-1.81836 1.82178-1.86279 1.90723-0.04102 0.08203-0.04102 0.24951 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.2461 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04102-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.23926 0-0.15381-0.0376-0.23584-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="Arrow chevron-right"
                className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="Arrow Icon chevron-right"
                  data-icon-name="chevron-right"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[14px] shrink-0 h-[14px]"
                >
                  <path
                    d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        data-pencil-name="How It Works Section"
        className="[box-sizing:content-box] w-[1440px] h-[673.5px] shrink-0 flex flex-col gap-[60px] p-[96px_100px] justify-start items-start bg-[#08080A] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_0px_0px]"
      >
        <div
          data-pencil-name="How Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="How Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            HOW IT WORKS
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="How Headline"
          className="text-[40px]/[46px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-left"
        >
          From signed PDF to
          <br />
          counter-offer in a day.
        </motion.div>
        <div
          data-pencil-name="How Steps"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[40px] justify-start items-start"
        >
          <motion.div whileHover={{ y: -4, borderColor: "#2A2F36" }} transition={{ duration: 0.2 }} 
            data-pencil-name="How Step 1"
            className="transition-all box-border [flex:1_1_0] h-fit flex flex-col gap-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="How Step Circle 1"
              className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#E03A2F1F] [outline:1px_solid_#E03A2F59] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="How Step Num 1"
                className="text-[12.5px]/[normal] box-border text-[#FF6A5A] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                1
              </div>
            </div>
            <div
              data-pencil-name="How Step Text 1"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] p-[6px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="How Step Title 1"
                className="text-[15.5px]/[normal] box-border w-full text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-left"
              >
                Upload your contract
              </div>
              <div
                data-pencil-name="How Step Body 1"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Drop the PDF you were emailed. Up to 30 pages, any specialty. No intake call, no
                redaction.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, borderColor: "#2A2F36" }} transition={{ duration: 0.2 }} 
            data-pencil-name="How Step 2"
            className="transition-all box-border [flex:1_1_0] h-fit flex flex-col gap-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="How Step Circle 2"
              className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#FFFFFF14] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="How Step Num 2"
                className="text-[12.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                2
              </div>
            </div>
            <div
              data-pencil-name="How Step Text 2"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] p-[6px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="How Step Title 2"
                className="text-[15.5px]/[normal] box-border w-full text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-left"
              >
                The AI reads every clause
              </div>
              <div
                data-pencil-name="How Step Body 2"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Trained on physician employment agreements to find tail insurance, non-competes,
                call pay, and bonus traps.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, borderColor: "#2A2F36" }} transition={{ duration: 0.2 }} 
            data-pencil-name="How Step 3"
            className="transition-all box-border [flex:1_1_0] h-fit flex flex-col gap-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="How Step Circle 3"
              className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#FFFFFF14] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="How Step Num 3"
                className="text-[12.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                3
              </div>
            </div>
            <div
              data-pencil-name="How Step Text 3"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] p-[6px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="How Step Title 3"
                className="text-[15.5px]/[normal] box-border w-full text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-left"
              >
                A physician signs off
              </div>
              <div
                data-pencil-name="How Step Body 3"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Every flag is reviewed by a licensed physician before it reaches you. Nothing ships
                unchecked.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, borderColor: "#2A2F36" }} transition={{ duration: 0.2 }} 
            data-pencil-name="How Step 4"
            className="transition-all box-border [flex:1_1_0] h-fit flex flex-col gap-[12px] justify-start items-start"
          >
            <div
              data-pencil-name="How Step Circle 4"
              className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#FFFFFF14] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="How Step Num 4"
                className="text-[12.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                4
              </div>
            </div>
            <div
              data-pencil-name="How Step Text 4"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] p-[6px_0px_0px_0px] justify-start items-start"
            >
              <div
                data-pencil-name="How Step Title 4"
                className="text-[15.5px]/[normal] box-border w-full text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.3px] text-left"
              >
                Send the redline back
              </div>
              <div
                data-pencil-name="How Step Body 4"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                You get marked-up changes, a dollar value per risk, and a negotiation email to
                forward as-is.
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 10px 30px rgba(224, 58, 47, 0.45)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} 
          data-pencil-name="How CTA"
          className="cursor-pointer box-border w-fit h-fit shrink-0 flex flex-row gap-[12px] p-[9px_9px_9px_22px] justify-start items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="How CTA Label"
            className="text-[13.5px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
          >
            Start today
          </div>
          <div
            data-pencil-name="How CTA Chevron"
            className="box-border w-[24px] shrink-0 h-[24px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF12] rounded-[999px]"
          >
            <svg
              data-pencil-name="How CTA Icon"
              data-icon-name="chevron-right"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[13px] shrink-0 h-[13px]"
            >
              <path
                d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                fill="#F6F5F3"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>
      <div
        data-pencil-name="Pricing Section"
        className="[box-sizing:content-box] w-[1440px] h-[883.5px] shrink-0 flex flex-col gap-[30px] p-[96px_100px] justify-start items-start bg-[#08080A] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_0px_0px]"
      >
        <div
          data-pencil-name="Pricing Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="Pricing Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            PRICING
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="Pricing Headline"
          className="text-[40px]/[46px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-left"
        >
          One price. One contract. One day.
        </motion.div>
        <div
          data-pencil-name="Pricing Sub"
          className="text-[14.5px]/[24px] box-border w-[600px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
        >
          No subscription, no hourly meter, no upsell at checkout. Compare it with what each path
          actually costs a new attending.
        </div>
        <div
          data-pencil-name="Pricing Cards"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] p-[26px_0px_0px_0px] justify-start items-start"
        >
          <motion.div whileHover={{ y: -6, borderColor: "#2F333B" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Plan Sign as-is"
            className="transition-all box-border [flex:1_1_0] h-[400px] flex flex-col gap-0 p-[26px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[16px]"
          >
            <div
              data-pencil-name="Plan Top Sign as-is"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start"
            >
              <div
                data-pencil-name="Plan Name Row Sign as-is"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Plan Name Sign as-is"
                  className="text-[15px]/[normal] box-border text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  Sign as-is
                </div>
              </div>
              <div
                data-pencil-name="Plan Price Row Sign as-is"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] p-[16px_0px_0px_0px] justify-start items-end"
              >
                <div
                  data-pencil-name="Plan Price Sign as-is"
                  className="text-[42px]/[normal] box-border text-[#9A9DA4] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.8px] text-left [white-space:nowrap]"
                >
                  $12,400
                </div>
                <div
                  data-pencil-name="Plan Unit Sign as-is"
                  className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  avg. tail exposure
                </div>
              </div>
              <div
                data-pencil-name="Plan Desc Sign as-is"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Most physicians never read the tail insurance clause until they give notice.
              </div>
              <div
                data-pencil-name="Plan List Sign as-is"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[11px] p-[22px_0px_0px_0px] justify-start items-start"
              >
                <div
                  data-pencil-name="Plan Row Sign as-is 0"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Sign as-is 0"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Sign as-is 0"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Tail policy becomes your bill
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Sign as-is 1"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Sign as-is 1"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Sign as-is 1"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Non-compete stays at 24 months
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Sign as-is 2"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Sign as-is 2"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Sign as-is 2"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    No leverage on call or RVU pay
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Sign as-is 3"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Sign as-is 3"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Sign as-is 3"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Zero cost today — until it isn't
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Plan CTA Sign as-is"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[13px_16px] justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="Plan CTA Label Sign as-is"
                className="text-[13px]/[normal] box-border text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                Nothing to pay
              </div>
              <svg
                data-pencil-name="Plan CTA Icon Sign as-is"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[13px] shrink-0 h-[13px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8C9098"
                ></path>
              </svg>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -6, borderColor: "#2F333B" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Plan Traditional attorney"
            className="transition-all box-border [flex:1_1_0] h-[400px] flex flex-col gap-0 p-[26px] justify-between items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[16px]"
          >
            <div
              data-pencil-name="Plan Top Traditional attorney"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start"
            >
              <div
                data-pencil-name="Plan Name Row Traditional attorney"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Plan Name Traditional attorney"
                  className="text-[15px]/[normal] box-border text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  Traditional attorney
                </div>
              </div>
              <div
                data-pencil-name="Plan Price Row Traditional attorney"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] p-[16px_0px_0px_0px] justify-start items-end"
              >
                <div
                  data-pencil-name="Plan Price Traditional attorney"
                  className="text-[42px]/[normal] box-border text-[#9A9DA4] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.8px] text-left [white-space:nowrap]"
                >
                  $500–900
                </div>
                <div
                  data-pencil-name="Plan Unit Traditional attorney"
                  className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  per review
                </div>
              </div>
              <div
                data-pencil-name="Plan Desc Traditional attorney"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Good counsel, if you have three weeks and a lawyer who knows physician comp.
              </div>
              <div
                data-pencil-name="Plan List Traditional attorney"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[11px] p-[22px_0px_0px_0px] justify-start items-start"
              >
                <div
                  data-pencil-name="Plan Row Traditional attorney 0"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Traditional attorney 0"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#8CE0A8"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Traditional attorney 0"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#8C9098] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Full contract review
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Traditional attorney 1"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Traditional attorney 1"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Traditional attorney 1"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    2–3 week turnaround
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Traditional attorney 2"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Traditional attorney 2"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Traditional attorney 2"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Revisions billed hourly
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row Traditional attorney 3"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check Traditional attorney 3"
                    data-icon-name="x"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#4A4E55"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature Traditional attorney 3"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    No dollar-value risk scoring
                  </div>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.03, y: -1, backgroundColor: "#1A1D24" }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} 
              data-pencil-name="Plan CTA Traditional attorney"
              className="cursor-pointer box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[13px_16px] justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
            >
              <div
                data-pencil-name="Plan CTA Label Traditional attorney"
                className="text-[13px]/[normal] box-border text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                Book a consult
              </div>
              <svg
                data-pencil-name="Plan CTA Icon Traditional attorney"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[13px] shrink-0 h-[13px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8C9098"
                ></path>
              </svg>
            </motion.div>
          </motion.div>
          <motion.div whileHover={{ y: -8, boxShadow: "0px 20px 50px rgba(224, 58, 47, 0.25)", borderColor: "#F04A3B" }} transition={{ duration: 0.25, ease: "easeOut" }} 
            data-pencil-name="Plan RedlineMD"
            className="transition-all box-border [flex:1_1_0] h-[400px] flex flex-col gap-0 p-[26px] justify-between items-start bg-[#12141A] [outline:1.5px_solid_#E03A2F66] [outline-offset:-0.75px] rounded-[16px]"
          >
            <div
              data-pencil-name="Plan Top RedlineMD"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start"
            >
              <div
                data-pencil-name="Plan Name Row RedlineMD"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Plan Name RedlineMD"
                  className="text-[15px]/[normal] box-border text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                >
                  RedlineMD
                </div>
                <div
                  data-pencil-name="Plan Badge RedlineMD"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[4px_10px] justify-start items-start bg-[#E03A2F1F] rounded-[999px]"
                >
                  <div
                    data-pencil-name="Plan Badge Label RedlineMD"
                    className="text-[9px]/[normal] box-border text-[#FF6A5A] font-[Inter,system-ui,sans-serif] font-bold tracking-[0.9px] text-left [white-space:nowrap]"
                  >
                    RECOMMENDED
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Plan Price Row RedlineMD"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] p-[16px_0px_0px_0px] justify-start items-end"
              >
                <div
                  data-pencil-name="Plan Price RedlineMD"
                  className="text-[42px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.8px] text-left [white-space:nowrap]"
                >
                  $199
                </div>
                <div
                  data-pencil-name="Plan Unit RedlineMD"
                  className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  flat, one-time
                </div>
              </div>
              <div
                data-pencil-name="Plan Desc RedlineMD"
                className="text-[13px]/[21px] box-border w-full text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
              >
                Everything you need to push back before the offer window closes.
              </div>
              <div
                data-pencil-name="Plan List RedlineMD"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[11px] p-[22px_0px_0px_0px] justify-start items-start"
              >
                <div
                  data-pencil-name="Plan Row RedlineMD 0"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check RedlineMD 0"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FF6A5A"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature RedlineMD 0"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Redline back in 24 hours
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row RedlineMD 1"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check RedlineMD 1"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FF6A5A"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature RedlineMD 1"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Every risk priced in dollars
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row RedlineMD 2"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check RedlineMD 2"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FF6A5A"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature RedlineMD 2"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Physician-attorney reviewed
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row RedlineMD 3"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check RedlineMD 3"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FF6A5A"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature RedlineMD 3"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Negotiation email included
                  </div>
                </div>
                <div
                  data-pencil-name="Plan Row RedlineMD 4"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-[9px] justify-start items-start"
                >
                  <svg
                    data-pencil-name="Plan Check RedlineMD 4"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[13px] shrink-0 h-[13px]"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FF6A5A"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="Plan Feature RedlineMD 4"
                    className="text-[12.5px]/[19px] box-border [flex:1_1_0] text-[#C4C7CC] font-[Inter,system-ui,sans-serif] font-normal text-left"
                  >
                    Unlimited revisions for 30 days
                  </div>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 12px 35px rgba(224, 58, 47, 0.55)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} 
              data-pencil-name="Plan CTA RedlineMD"
              className="cursor-pointer box-border w-full h-fit shrink-0 flex flex-row gap-[9px] p-[13px_16px] justify-center items-center [background-image:linear-gradient(180deg,_#F04A3B_0%,_#D62E23_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[999px]"
            >
              <div
                data-pencil-name="Plan CTA Label RedlineMD"
                className="text-[13px]/[normal] box-border text-[#FFFFFF] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                Review my contract
              </div>
              <svg
                data-pencil-name="Plan CTA Icon RedlineMD"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[13px] shrink-0 h-[13px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <div
          data-pencil-name="Pricing Note"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] p-[10px_0px_0px_0px] justify-center items-center"
        >
          <svg
            data-pencil-name="Pricing Note Icon"
            data-icon-name="lock"
            data-icon-set="lucide"
            viewBox="0 0 13.99993896484375 14"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="box-border w-[12px] shrink-0 h-[12px]"
          >
            <path
              d="M6.77441 0.60156q-0.72803 0.02734-1.38769 0.3794-0.65625 0.34863-1.12451 0.92285-0.46826 0.57422-0.64942 1.28857l0 0.01367q-0.07178 0.29395-0.08545 0.48536-0.01367 0.18799-0.02734 1.02539l0 1.10742-0.2666 0q-0.40674 0-0.63916 0.04443-0.229 0.04102-0.45117 0.15039-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599l-0.05469 0.15381 0 4.7168 0.05469 0.15381q0.15723 0.51953 0.56055 0.86132 0.40674 0.3418 0.93994 0.39991 0.14014 0.02734 4.26904 0.02734 4.12891 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-4.7168-0.05469-0.15381q-0.11279-0.36572-0.35205-0.64599-0.23584-0.28027-0.56055-0.44776-0.22217-0.10938-0.45459-0.15039-0.229-0.04443-0.63574-0.04443l-0.2666 0 0-1.13477q-0.01367-0.81006-0.02734-0.99804-0.01367-0.19141-0.08545-0.47168l0-0.02735q-0.18115-0.71436-0.66651-1.30224-0.48193-0.58789-1.15185-0.93653-0.82715-0.40674-1.79444-0.35205z m0.70069 1.20313q0.75537 0.15381 1.2749 0.7417 0.3623 0.40674 0.50244 0.92627 0.05811 0.19482 0.06494 0.41357 0.00684 0.21533 0.00684 0.9707l0 0.96729-4.64844 0 0-1.06299q0-0.82715 0.01367-1.0083 0.01367-0.18457 0.09912-0.40674 0.22217-0.64258 0.74854-1.06982 0.52637-0.42725 1.19629-0.5127 0.14014-0.01367 0.3623 0 0.22559 0.01367 0.3794 0.04102z m3.85205 5.25q0.08203 0.04443 0.15723 0.12304 0.07861 0.0752 0.11279 0.15381 0.0376 0.0752 0.0581 0.19483 0.02051 0.11621 0.00684 2.19092l0 1.6372q0 0.3623-0.02734 0.48877-0.01367 0.08545-0.07178 0.14014l-0.01367 0.02734q-0.11279 0.12646-0.26661 0.19824l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.01367-0.02734q-0.05811-0.06836-0.07178-0.14014-0.02734-0.12646-0.02734-0.48877l0-1.65088q-0.01367-2.08838 0.01367-2.20117 0.01367-0.18115 0.1333-0.31445 0.11963-0.1333 0.28711-0.17432 0.06836-0.01367 4.25537-0.01367l4.20069 0.01367 0.09912 0.04102z"
              fill="#6B6F76"
            ></path>
          </svg>
          <div
            data-pencil-name="Pricing Note Text"
            className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
          >
            Payments secured by Stripe · Covered by our $1,000 minimum-savings guarantee
          </div>
        </div>
      </div>
      <div
        data-pencil-name="FAQ Section"
        className="[box-sizing:content-box] w-[1440px] h-[975.5px] shrink-0 flex flex-col gap-[26px] p-[96px_100px] justify-start items-start bg-[#08080A] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_0px_0px]"
      >
        <div
          data-pencil-name="FAQ Eyebrow"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 p-[7px_14px] justify-start items-start bg-[#FFFFFF05] [outline:1px_solid_#FFFFFF1F] [outline-offset:-0.5px] rounded-[999px]"
        >
          <div
            data-pencil-name="FAQ Eyebrow Label"
            className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.3px] text-left [white-space:nowrap]"
          >
            FAQ
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="FAQ Headline"
          className="text-[40px]/[46px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-1.6px] text-left"
        >
          Questions before you
          <br />
          send us a contract.
        </motion.div>
        <div
          data-pencil-name="FAQ Sub"
          className="text-[14.5px]/[24px] box-border w-[520px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
        >
          Clear answers on scope, timing, and how we handle your document.
        </div>
        <div
          data-pencil-name="FAQ List"
          className="box-border w-full h-fit shrink-0 flex flex-col gap-[10px] p-[34px_0px_0px_0px] justify-start items-start"
        >
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 0"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#101216] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 0"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 0"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#F6F5F3] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                Is an AI review really enough for a legal contract?
              </div>
              <div
                data-pencil-name="FAQ Toggle 0"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 0"
                  data-icon-name="minus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M2.73096 6.45313q-0.23926 0.08545-0.34522 0.3247-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.18457 0.12647l0.09571 0.02734 8.40136 0 0.09571-0.02734q0.09912-0.04443 0.18115-0.12647 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-4.22803 0q-4.22803 0-4.28271 0.02735z"
                    fill="#F6F5F3"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="FAQ Answer 0"
              className="text-[13.5px]/[23px] box-border w-[880px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              RedlineMD is not a law firm and does not provide legal advice. What you get is a
              clause-level analysis of your specific agreement, priced in dollars, reviewed by a
              licensed physician — so you can go into the negotiation knowing exactly which terms to
              push on. Most physicians use it either instead of a full attorney review or to prepare
              for one.
            </div>
          </motion.div>
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 1"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 1"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 1"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#C9CCD1] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                What exactly does the $199 cover?
              </div>
              <div
                data-pencil-name="FAQ Toggle 1"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 1"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 2"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 2"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 2"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#C9CCD1] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                How fast will I get my contract back?
              </div>
              <div
                data-pencil-name="FAQ Toggle 2"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 2"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 3"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 3"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 3"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#C9CCD1] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                What if my contract is longer than 30 pages?
              </div>
              <div
                data-pencil-name="FAQ Toggle 3"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 3"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 4"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 4"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 4"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#C9CCD1] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                Does this work for my specialty?
              </div>
              <div
                data-pencil-name="FAQ Toggle 4"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 4"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ borderColor: "#3A3F4A", backgroundColor: "#121419" }} transition={{ duration: 0.18 }} 
            data-pencil-name="FAQ Item 5"
            className="cursor-pointer transition-colors box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[20px_24px] justify-start items-start bg-[#0D0E11] [outline:1px_solid_#20242A] [outline-offset:-0.5px] rounded-[12px]"
          >
            <div
              data-pencil-name="FAQ Question Row 5"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-between items-center"
            >
              <div
                data-pencil-name="FAQ Question 5"
                className="text-[15px]/[normal] box-border [flex:1_1_0] text-[#C9CCD1] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.2px] text-left"
              >
                How is my contract data handled?
              </div>
              <div
                data-pencil-name="FAQ Toggle 5"
                className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF08] [outline:1px_solid_#2A2F36] [outline-offset:-0.5px] rounded-[999px]"
              >
                <svg
                  data-pencil-name="FAQ Toggle Icon 5"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[13px] shrink-0 h-[13px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#9A9DA4"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        data-pencil-name="Final CTA"
        className="[box-sizing:content-box] w-[1440px] h-[476.5px] shrink-0 flex flex-col gap-[26px] p-[104px_100px] justify-start items-center bg-[#08080A] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_0px_0px]"
      >
        <div
          data-pencil-name="CTA Eyebrow"
          className="text-[10.5px]/[normal] box-border text-[#B7BAC0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[1.5px] text-left [white-space:nowrap]"
        >
          YOUR OFFER WINDOW IS SHORT
        </div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
          data-pencil-name="CTA Headline"
          className="text-[52px]/[57px] box-border w-full text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-bold tracking-[-2px] text-center"
        >
          Sign with leverage, not hope.
        </motion.div>
        <div
          data-pencil-name="CTA Sub"
          className="text-[15px]/[24px] box-border w-[520px] text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-center"
        >
          Upload your contract tonight. Read the redline tomorrow morning.
        </div>
        <div
          data-pencil-name="CTA Button Row"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[14px] p-[6px_0px_0px_0px] justify-start items-center"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 14px 40px rgba(224, 58, 47, 0.55)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} 
            data-pencil-name="CTA Button"
            className="cursor-pointer box-border w-fit shrink-0 h-fit flex flex-row gap-[14px] p-[9px_9px_9px_24px] justify-start items-center [background-image:linear-gradient(180deg,_#FF6448_0%,_#D42A20_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[999px]"
          >
            <div
              data-pencil-name="CTA Button Label"
              className="text-[14.5px]/[normal] box-border text-[#FFFFFF] font-[Inter,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
            >
              Review my contract — $199
            </div>
            <div
              data-pencil-name="CTA Button Chevron"
              className="box-border w-[26px] shrink-0 h-[26px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF38] rounded-[999px]"
            >
              <svg
                data-pencil-name="CTA Button Icon"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[14px] shrink-0 h-[14px]"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </motion.div>
        </div>
        <div
          data-pencil-name="CTA Trust Row"
          className="box-border w-fit h-fit shrink-0 flex flex-row gap-[22px] p-[6px_0px_0px_0px] justify-start items-center"
        >
          <div
            data-pencil-name="CTA Trust 24-hour turnaround"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="CTA Trust Icon 24-hour turnaround"
              data-icon-name="check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <div
              data-pencil-name="CTA Trust Label 24-hour turnaround"
              className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              24-hour turnaround
            </div>
          </div>
          <div
            data-pencil-name="CTA Trust Physician-attorney reviewed"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="CTA Trust Icon Physician-attorney reviewed"
              data-icon-name="check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <div
              data-pencil-name="CTA Trust Label Physician-attorney reviewed"
              className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Physician-attorney reviewed
            </div>
          </div>
          <div
            data-pencil-name="CTA Trust $1,000 savings guarantee"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
          >
            <svg
              data-pencil-name="CTA Trust Icon $1,000 savings guarantee"
              data-icon-name="check"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border w-[12px] shrink-0 h-[12px]"
            >
              <path
                d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                fill="#FF6A5A"
              ></path>
            </svg>
            <div
              data-pencil-name="CTA Trust Label $1,000 savings guarantee"
              className="text-[12px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              $1,000 savings guarantee
            </div>
          </div>
        </div>
      </div>
      <div
        data-pencil-name="Footer"
        className="[box-sizing:content-box] w-[1440px] h-[388.5px] shrink-0 flex flex-col gap-[44px] p-[56px_100px_36px_100px] justify-start items-start bg-[#060608] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#171A1F] [margin:-0.5px_0px_0px_0px]"
      >
        <div
          data-pencil-name="Footer Top"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[60px] justify-between items-start"
        >
          <div
            data-pencil-name="Footer Brand"
            className="box-border w-[320px] shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start"
          >
            <div
              data-pencil-name="Footer Brand Row"
              className="box-border w-fit h-fit shrink-0 flex flex-row gap-[9px] justify-start items-center"
            >
              <div
                data-pencil-name="Footer Wordmark"
                className="text-[19px]/[normal] box-border text-[#F6F5F3] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.6px] text-left [white-space:nowrap]"
              >
                REDLINE
              </div>
              <div
                data-pencil-name="Footer Wordmark MD"
                className="text-[19px]/[normal] box-border text-[#E03A2F] font-['Inter_Tight',system-ui,sans-serif] font-extrabold tracking-[-0.6px] text-left [white-space:nowrap]"
              >
                MD
              </div>
            </div>
            <div
              data-pencil-name="Footer Tagline"
              className="text-[13px]/[21px] box-border w-[280px] text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left"
            >
              Contract review for physicians who plan to negotiate.
            </div>
            <div
              data-pencil-name="Footer Status"
              className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] p-[6px_0px_0px_0px] justify-start items-center"
            >
              <div
                data-pencil-name="Status Dot"
                className="box-border w-[6px] shrink-0 h-[6px] bg-[#4ADE80] rounded-[50%]"
              ></div>
              <div
                data-pencil-name="Status Label"
                className="text-[11.5px]/[normal] box-border text-[#6B6F76] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                All systems operational
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Footer Columns"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[76px] justify-start items-start"
          >
            <div
              data-pencil-name="Footer Col PLATFORM"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Footer Head PLATFORM"
                className="text-[10.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.3px] text-left [white-space:nowrap]"
              >
                PLATFORM
              </div>
              <div
                data-pencil-name="Footer Link How it works"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                How it works
              </div>
              <div
                data-pencil-name="Footer Link What's included"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                What's included
              </div>
              <div
                data-pencil-name="Footer Link Pricing"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Pricing
              </div>
              <div
                data-pencil-name="Footer Link Security"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Security
              </div>
            </div>
            <div
              data-pencil-name="Footer Col COMPANY"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Footer Head COMPANY"
                className="text-[10.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.3px] text-left [white-space:nowrap]"
              >
                COMPANY
              </div>
              <div
                data-pencil-name="Footer Link About"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                About
              </div>
              <div
                data-pencil-name="Footer Link Physician advisors"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Physician advisors
              </div>
              <div
                data-pencil-name="Footer Link Careers"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Careers
              </div>
              <div
                data-pencil-name="Footer Link Contact"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Contact
              </div>
            </div>
            <div
              data-pencil-name="Footer Col LEGAL"
              className="box-border w-fit shrink-0 h-fit flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Footer Head LEGAL"
                className="text-[10.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-bold tracking-[1.3px] text-left [white-space:nowrap]"
              >
                LEGAL
              </div>
              <div
                data-pencil-name="Footer Link Terms"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Terms
              </div>
              <div
                data-pencil-name="Footer Link Privacy"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Privacy
              </div>
              <div
                data-pencil-name="Footer Link Refund policy"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Refund policy
              </div>
              <div
                data-pencil-name="Footer Link Disclaimer"
                className="text-[13px]/[normal] box-border text-[#9A9DA4] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Disclaimer
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="Footer Compliance"
          className="[box-sizing:content-box] w-[1240px] h-[55.5px] shrink-0 flex flex-row gap-0 p-[20px_0px_0px_0px] justify-between items-center [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#17191E] [margin:-0.5px_0px_0px_0px]"
        >
          <div
            data-pencil-name="Footer Compliance Text"
            className="text-[11.5px]/[18px] box-border w-[560px] shrink-0 text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left"
          >
            Not a law firm. RedlineMD provides document analysis and physician-authored guidance,
            not legal advice.
          </div>
          <div
            data-pencil-name="Footer Compliance Badges"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[22px] justify-start items-center"
          >
            <div
              data-pencil-name="Footer Badge SOC 2 Type I"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center"
            >
              <svg
                data-pencil-name="Footer Badge Icon SOC 2 Type I"
                data-icon-name="badge-check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#4A4E55"
                ></path>
              </svg>
              <div
                data-pencil-name="Footer Badge Label SOC 2 Type I"
                className="text-[11px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                SOC 2 Type I
              </div>
            </div>
            <div
              data-pencil-name="Footer Badge ISO 27001"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center"
            >
              <svg
                data-pencil-name="Footer Badge Icon ISO 27001"
                data-icon-name="badge-check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#4A4E55"
                ></path>
              </svg>
              <div
                data-pencil-name="Footer Badge Label ISO 27001"
                className="text-[11px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                ISO 27001
              </div>
            </div>
            <div
              data-pencil-name="Footer Badge HIPAA"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center"
            >
              <svg
                data-pencil-name="Footer Badge Icon HIPAA"
                data-icon-name="badge-check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#4A4E55"
                ></path>
              </svg>
              <div
                data-pencil-name="Footer Badge Label HIPAA"
                className="text-[11px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                HIPAA
              </div>
            </div>
            <div
              data-pencil-name="Footer Badge GDPR"
              className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center"
            >
              <svg
                data-pencil-name="Footer Badge Icon GDPR"
                data-icon-name="badge-check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M6.56592 0.61523q-0.4751 0.07178-0.90918 0.3042-0.43408 0.229-0.76904 0.57764l-0.1128 0.11279-0.22558 0q-0.37598 0-0.72803 0.08545-0.72803 0.18115-1.26807 0.68018-0.53662 0.49561-0.78955 1.19287-0.08203 0.25293-0.11279 0.4375-0.02734 0.18115-0.04102 0.44775l0 0.32129-0.09912 0.08203q-0.0957 0.08545-0.22217 0.23926-0.50586 0.60156-0.65966 1.37061-0.04102 0.21191-0.04102 0.5332 0 0.32129 0.04102 0.5332 0.15381 0.76904 0.65966 1.37061 0.12646 0.15381 0.22217 0.23926l0.09912 0.08203 0 0.32129q0.01367 0.2666 0.04102 0.45117 0.03076 0.18115 0.11279 0.43408 0.22559 0.61523 0.68701 1.09033 0.22217 0.22559 0.43067 0.37256 0.21191 0.14697 0.49219 0.2666 0.28027 0.11621 0.52294 0.16748 0.24609 0.04785 0.55713 0.06153l0.32129 0 0.15381 0.15381q0.64258 0.65967 1.59619 0.84082 0.18115 0.02734 0.48194 0.02734 0.30078 0 0.46826-0.02734 0.90918-0.16748 1.56885-0.81348l0.18115-0.18115 0.32129 0q0.23926-0.01367 0.36572-0.02735 0.12646-0.01367 0.30762-0.07177 0.65967-0.16748 1.16211-0.6084 0.50244-0.44092 0.76904-1.05616 0.23926-0.54688 0.23926-1.1621l0-0.23926 0.11279-0.1128q0.30762-0.29395 0.52978-0.69043 0.22559-0.3999 0.32471-0.83398 0.15381-0.72803-0.07861-1.45605-0.23242-0.72803-0.76221-1.23047l-0.12646-0.12647 0-0.23926q0-1.18945-0.81348-2.03027-0.34863-0.3623-0.78271-0.58789-0.34863-0.16748-0.65967-0.23584-0.30762-0.07178-0.6836-0.07178l-0.22558 0-0.1128-0.11279q-0.27686-0.30762-0.67675-0.52978-0.3999-0.22559-0.80664-0.30762-0.22217-0.05811-0.52979-0.06494-0.30762-0.00684-0.5332 0.0205z m0.75537 1.17579q0.32129 0.04443 0.6084 0.23242 0.28711 0.18799 0.51269 0.4956 0.15381 0.21191 0.32129 0.2666 0.09912 0.04102 0.16748 0.04102 0.07178 0 0.19824-0.01367 0.46143-0.08203 0.86475 0.04443 0.40674 0.12305 0.71436 0.43408 0.31104 0.30762 0.43408 0.7212 0.12646 0.41016 0.04443 0.85791-0.02734 0.21191 0.02734 0.37255 0.05469 0.16064 0.26661 0.31446 0.48877 0.35205 0.66992 0.86816 0.08545 0.25293 0.08545 0.57422 0 0.32129-0.08545 0.57422-0.19482 0.5332-0.68359 0.88183-0.19824 0.14014-0.25294 0.30079-0.05469 0.16064-0.02734 0.37255 0.06836 0.38965-0.02392 0.76221-0.08887 0.36914-0.31446 0.66309-0.41699 0.51953-1.06299 0.64599-0.11279 0.02734-0.30078 0.02051-0.18799-0.00684-0.34179-0.02051-0.25293-0.04102-0.39991 0.02051-0.14697 0.06152-0.31445 0.30078-0.29395 0.37939-0.70752 0.56738-0.41357 0.18799-0.86816 0.15381-0.45459-0.03418-0.84766-0.31445-0.23584-0.15381-0.44775-0.43408-0.14014-0.21191-0.29395-0.27344-0.15381-0.06152-0.37597-0.03418-0.35205 0.05469-0.59131 0.02734-0.58789-0.09912-0.99121-0.48876-0.646-0.63232-0.49219-1.56885 0.01367-0.16748 0.00683-0.25977-0.00684-0.09229-0.06152-0.18799-0.04102-0.08545-0.09912-0.14013-0.05469-0.05811-0.19482-0.15381-0.48877-0.36572-0.67334-0.99463-0.02734-0.12646-0.02735-0.42041 0-0.29395 0.02735-0.42041 0.18457-0.62891 0.65966-0.98096 0.23584-0.16748 0.29737-0.28369 0.06494-0.11963 0.07177-0.21191 0.00684-0.09229-0.00683-0.25977-0.08203-0.50244 0.07861-0.94336 0.16064-0.44092 0.54004-0.73486 0.33496-0.2666 0.75537-0.35205 0.10938-0.02734 0.31787-0.02735 0.21191 0 0.36573 0.02735 0.12646 0.01367 0.16748 0.01367 0.04443 0 0.11279-0.01367 0.14014-0.02734 0.22217-0.08887 0.08545-0.06494 0.18457-0.20508 0.25293-0.34863 0.56738-0.52978 0.31445-0.18457 0.74854-0.22559 0.16748-0.01367 0.44775 0.02735z m1.28857 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21191-0.27002 0.0957-0.27686-0.0581-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#4A4E55"
                ></path>
              </svg>
              <div
                data-pencil-name="Footer Badge Label GDPR"
                className="text-[11px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                GDPR
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="Footer Bottom"
          className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
        >
          <div
            data-pencil-name="Copyright"
            className="text-[11.5px]/[normal] box-border text-[#3F434A] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
          >
            © 2026 RedlineMD. All rights reserved.
          </div>
          <div
            data-pencil-name="Footer Bottom Right"
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[20px] justify-start items-center"
          >
            <div
              data-pencil-name="Bottom Link Privacy"
              className="text-[11.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Privacy
            </div>
            <div
              data-pencil-name="Bottom Link Terms"
              className="text-[11.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Terms
            </div>
            <div
              data-pencil-name="Bottom Link Cookies"
              className="text-[11.5px]/[normal] box-border text-[#575B62] font-[Inter,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Cookies
            </div>
            <div
              data-pencil-name="Social twitter"
              className="box-border w-[28px] shrink-0 h-[28px] flex flex-row gap-0 justify-center items-center [outline:1px_solid_#22262C] [outline-offset:-0.5px] rounded-[999px]"
            >
              <svg
                data-pencil-name="Social Icon twitter"
                data-icon-name="twitter"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M8.90381 1.77734q-0.48877 0.07178-0.9502 0.30762-0.35205 0.18457-0.63232 0.40674-0.40674 0.36572-0.6665 0.89209-0.25635 0.52295-0.29737 1.0835l-0.01709 0.19482-0.08203-0.01367q-0.84082-0.09912-1.55517-0.36573-1.39795-0.52979-2.36524-1.59619-0.14014-0.15381-0.20508-0.20166-0.06152-0.04785-0.12988-0.09228-0.11279-0.05469-0.23926-0.05469-0.2085 0-0.3418 0.09912-0.1333 0.0957-0.25976 0.34863-0.44775 0.89551-0.54688 1.89014-0.0957 0.99463 0.18116 1.96192 0.28027 1.03564 0.90234 1.86962 0.62549 0.83057 1.53467 1.39112l0.21191 0.14013-0.19824 0.08203q-0.88184 0.3794-1.83203 0.3794-0.32471 0-0.40674 0.02734-0.2666 0.07178-0.37256 0.32471-0.10254 0.24951 0.00684 0.50244 0.05811 0.08203 0.1333 0.15381 0.07861 0.06836 0.25976 0.18115 1.41504 0.88184 3.06592 1.09375 0.25293 0.04102 0.84082 0.04102 0.4751 0 0.69043-0.02051 0.21875-0.02051 0.61182-0.09228 1.06299-0.19482 2.05078-0.69727 0.98779-0.50586 1.77051-1.26123 0.98096-0.95361 1.54834-2.12939 0.56738-1.17578 0.69043-2.51905 0.03076-0.25293 0.03076-0.7417 0-0.49219-0.03076-0.68701l-0.02735-0.15381 0.18116-0.23926q0.1709-0.22217 0.3247-0.46142 0.18115-0.30762 0.36914-0.72803 0.18799-0.42041 0.24268-0.62207 0.0581-0.20166-0.04102-0.38965-0.0957-0.19141-0.27685-0.27685-0.09912-0.04102-0.23926-0.04102-0.14014 0-0.19824 0.02051-0.05469 0.02051-0.29395 0.16064-0.23584 0.14014-0.6084 0.3042-0.36914 0.16064-0.44091 0.16065-0.04102 0-0.2085-0.1128-0.46143-0.32129-1.0083-0.46142-0.23926-0.05811-0.58105-0.07861-0.3418-0.02051-0.59473 0.0205z m0.64258 1.14844q0.56055 0.04102 1.12109 0.51953 0.12647 0.0957 0.21533 0.1333 0.09229 0.03418 0.2461 0.03418 0.21191 0 0.39306-0.0581 0.05469-0.01367-0.22558 0.29394-0.16748 0.19824-0.19483 0.31787-0.02734 0.11621 0.01367 0.41016 0.02734 0.2666 0.04102 0.73145 0.01709 0.46143-0.01367 0.71093-0.14014 1.55518-1.02198 2.86426-0.88184 1.30908-2.30712 2.06445-0.7998 0.42041-1.75 0.61524-0.51953 0.09912-1.1211 0.09912-0.5332 0-1.0083-0.08545-0.15381-0.01367-0.42724-0.08203-0.27344-0.07178-0.30079-0.08545-0.02734-0.01367 0.09913-0.05469 0.3623-0.11279 0.74511-0.31445 0.38623-0.20508 0.69727-0.44092 0.3623-0.2666 0.44775-0.42041 0.02734-0.07178 0.03418-0.11279 0.00684-0.04102 0.00684-0.16065 0-0.11963-0.02051-0.18798-0.02051-0.07178-0.09228-0.1709-0.04102-0.05469-0.14014-0.10938-0.0957-0.05811-0.19483-0.09912-1.16211-0.3623-1.97558-1.31592-0.81006-0.95361-1.0083-2.19775-0.02734-0.18115-0.03418-0.52295-0.00684-0.34521 0.00683-0.52637 0.04102-0.42041 0.14014-0.72802l0.02734-0.09913 0.12647 0.1128q0.65967 0.58789 1.52783 1.01513 0.86816 0.42725 1.77734 0.6084 0.5332 0.11279 1.14844 0.14014 0.42041 0.02734 0.58789-0.00684 0.16748-0.03418 0.28711-0.14697 0.11963-0.11279 0.16065-0.2666 0.04102-0.15381 0-0.33496-0.02734-0.09912-0.03418-0.32813-0.00684-0.23242 0.01367-0.35888 0.02051-0.12646 0.08203-0.30079 0.06494-0.17432 0.14697-0.30078 0.21191-0.34863 0.58789-0.58789 0.37939-0.23926 0.79981-0.2666 0.16748-0.01367 0.20849-0.01367l0.18116 0.01367z"
                  fill="#8C9098"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="Social linkedin"
              className="box-border w-[28px] shrink-0 h-[28px] flex flex-row gap-0 justify-center items-center [outline:1px_solid_#22262C] [outline-offset:-0.5px] rounded-[999px]"
            >
              <svg
                data-pencil-name="Social Icon linkedin"
                data-icon-name="linkedin"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[12px] shrink-0 h-[12px]"
              >
                <path
                  d="M2.15674 0.60156q-0.51953 0.04102-0.93311 0.38623-0.41016 0.3418-0.56396 0.86133-0.18457 0.64258 0.10937 1.25781 0.15381 0.32471 0.44092 0.56397 0.28711 0.23584 0.65283 0.34863 0.11279 0.02734 0.18116 0.03418 0.06836 0.00684 0.28027 0.02051 0.25293 0 0.3623-0.02051 0.11279-0.02051 0.32471-0.10596 0.30762-0.12646 0.55713-0.37597 0.25293-0.25293 0.37939-0.56055 0.08545-0.21191 0.10596-0.32129 0.02051-0.11279 0.02051-0.36572-0.01367-0.2085-0.02051-0.27686-0.00684-0.07178-0.03418-0.18457-0.11279-0.36572-0.35205-0.64599-0.23584-0.28027-0.56055-0.44776-0.29395-0.14014-0.56054-0.16748l-0.18116-0.01367q-0.05469 0-0.20849 0.01367z m0.42041 1.20313q0.33496 0.15381 0.33496 0.5332 0 0.2666-0.21191 0.44092-0.2085 0.17432-0.46143 0.11963-0.18115-0.02734-0.30762-0.15381-0.16748-0.15381-0.17431-0.38281-0.00684-0.23242 0.14697-0.417 0.11279-0.14014 0.30762-0.17431 0.19824-0.03418 0.36572 0.03418z m6.49414 2.29687q-0.57422 0.02734-1.1416 0.23926-0.56738 0.2085-1.05615 0.56055-0.15381 0.12305-0.37256 0.33496-0.21533 0.2085-0.3418 0.34863-0.56055 0.70068-0.78272 1.55518l-0.01367 0.05468q-0.05811 0.23926-0.07177 0.3794-0.02734 0.19482-0.02735 0.67334l0 4.15625 0.04102 0.09912q0.11279 0.2085 0.3247 0.29395 0.06836 0.02734 0.24952 0.02734l1.12109 0 1.12109 0q0.18115 0 0.24952-0.02734 0.21191-0.08545 0.3247-0.29395l0.04102-0.09912 0.02734-4.38184 0.02735-0.08545q0.07178-0.15381 0.21191-0.24951 0.14014-0.09912 0.34863-0.09912 0.16748 0 0.30078 0.09229 0.1333 0.08887 0.21875 0.25634l0.04102 0.09912 0.01367 4.38184 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.46435 0q0.18115 0 0.25635-0.03418 0.07861-0.0376 0.16748-0.11963 0.09229-0.08545 0.15039-0.18115l0.04102-0.1128 0-4.10156q-0.01367-0.47852-0.02734-0.67334-0.01367-0.14014-0.08545-0.37597l-0.01367-0.05811q-0.19482-0.81006-0.70753-1.47656-0.50928-0.6665-1.23046-1.07666-0.72119-0.41357-1.54834-0.49903-0.33496-0.04102-0.72803-0.01367z m-8.09033 0.60156q-0.23926 0.08545-0.35205 0.33838l-0.04102 0.08204 0 7.25292 0.04102 0.1128q0.05811 0.0957 0.14697 0.18115 0.09229 0.08203 0.16748 0.11963 0.07861 0.03418 0.25977 0.03418l2.46435 0 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-7.33496-0.04102-0.08545q-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-1.31592 0q-1.31592 0-1.3706 0.02735z m8.79101 0.5879q0.46143 0.05811 0.875 0.27685 0.41357 0.21533 0.74854 0.53662 0.62891 0.64258 0.81347 1.58252 0.02734 0.15381 0.04102 2.07129l0 1.91748-1.17578 0-0.01367-3.59912q0-0.26318-0.02735-0.34863-0.25293-0.81348-0.96728-1.14844-0.16748-0.08203-0.31446-0.10938-0.14697-0.03076-0.37255-0.03759-0.22217-0.00684-0.37598 0.02051-0.57422 0.11279-0.95361 0.5332-0.37598 0.42041-0.44776 0.99463-0.02734 0.15381-0.02734 1.91748l0 1.77734-1.14844 0 0-1.86279q0-1.49707 0.01367-1.81836 0.01367-0.32129 0.08545-0.58789 0.18115-0.67334 0.65625-1.19629 0.47852-0.52637 1.13477-0.7793 0.34863-0.12646 0.81347-0.16748 0.08203-0.01367 0.31104 0 0.23242 0.01367 0.33154 0.02735z m-6.84619 3.45898l0 2.92578-1.17578 0 0-5.85156 1.17578 0 0 2.92578z"
                  fill="#8C9098"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
