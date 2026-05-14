import LogoutBottomSheet from '@/components/LogoutBottomSheet';
import { IconButton, SafeAreaWrapper, ScreenHeader } from '@/components/ui';
import { QRIcon } from '@/components/ui/icons';
import {
  AccountInfo,
  AccountSettings,
  Appearance,
  ChatSettings,
  Footer,
  Help,
  NotificationStatus,
} from '@/components/you-screen';

const YouScreen = () => {
  return (
    <SafeAreaWrapper
      className="bg-bg-2"
      edges={['top', 'left', 'right']}
      scrollViewClassName="pb-3 px-4"
    >
      <ScreenHeader
        title="You"
        trailing={
          <IconButton accessibilityLabel="QR code">
            <QRIcon color="#44484E" />
          </IconButton>
        }
      />
      <AccountInfo />
      <Appearance />
      <NotificationStatus />
      <ChatSettings />
      <AccountSettings />
      <Help />
      <Footer />
      <LogoutBottomSheet />
    </SafeAreaWrapper>
  );
};

export default YouScreen;
