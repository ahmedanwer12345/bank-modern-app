import styles from "../styles"

const Button = ({styles}) => 
  (
    <button type="button" className={`${styles.flexCenter} ${styles} 
    bg-blue-gradient text-primary rounded-[10px] px-6 py-4 font-poppins font-medium text-[18px] outline-none`}>
        Get started

    </button>
  )


export default Button