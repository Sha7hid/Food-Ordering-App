import { Modal, useMantineTheme } from '@mantine/core';
import styles from '../styles/OrderModal.module.css'
export default function OrderModal({opened , setOpened, PaymentMethod}) {
    const theme = useMantineTheme();
    return (
        <Modal
        opened={opened}
        onClose={() => setOpened(null)}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}

        <form action="" className={styles.formContainer}>
            <input type="text" name='name' required placeholder='Name'/>
            <input type="text" name='phone' required placeholder='Phone Number'/>
       <textarea name='address'  cols={8} rows={3}></textarea>
        </form>
      </Modal>
    );
}