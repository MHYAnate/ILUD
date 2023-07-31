"use client";
import Ilud from "@/features/ilud/ilud";
import Link from "next/link";
import styles from "./styles.module.css";
import { Services } from "@/features/addCarousel/data";
import Ad from "@/features/addCarousel/ad";
import InCarousel from "@/features/addCarousel/ad1";
import TabContainer from "@/features/reacttest/main";
import Iludfooter from "@/features/iludfooter/iludfooter";
import UserBtnContainer from "@/features/firstPageLog/userBtn";
import AboutContainer from "@/features/aboutUs/about";

export default function Home() {
	return (
		<>
			{/*<div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>*/}
			<div className="flex items-center flex-col w-screen h-screen bg-gray-100">
				<div className={styles.header}>
					<Ilud />
					<div className={styles.nav}>
						<AboutContainer/>
					</div>
				</div>
				<div>
					{/* <TabContainer/> */}
					<InCarousel Services={Services} />
					{/* <Ad Services={Services} /> */}
				</div>
				<div className={styles.btnCard}>
				  <UserBtnContainer/>
				</div>
				<div className={styles.footer}>
					<div className={styles.contactUs}>
						<div className={styles.copyRight}>
							<div className={styles.copyDate}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="white"
									className={styles.svgCopy}
									viewBox="0 0 512 512"
								>
									<path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z" />
								</svg>{" "}
								2023
							</div>
							<Iludfooter/>
						</div>
						<Link className={styles.footLink} href="">
							<div className={styles.footCard}>
								{" "}
								07019923947
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="green"
									className={styles.contactLink}
									viewBox="-1.66 0 740.824 740.824"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"
									/>
								</svg>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
