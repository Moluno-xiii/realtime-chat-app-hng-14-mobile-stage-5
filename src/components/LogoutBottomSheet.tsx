import { BottomSheet, Button } from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import useAuth from '@/hooks/useAuth';
import { SignOutIcon } from './ui/icons';

const LogoutBottomSheet = () => {
  const router = useRouter();
  const { logout: signOutUser, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const loggingOut = isLoading === 'logout';

  const logout = async () => {
    try {
      await signOutUser();
      setIsOpen(false);
      router.replace('/(auth)/login');
    } catch {
      setIsOpen(false);
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen}>
      <BottomSheet.Trigger asChild>
        <Button variant="ghost" size="lg" onPress={() => setIsOpen(true)}>
          <SignOutIcon color="#CF4040" />
          <Button.Label className="text-danger">Sign out</Button.Label>
        </Button>
      </BottomSheet.Trigger>
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          <View className="mb-8 gap-2 items-center">
            <BottomSheet.Title className="text-center">Logout</BottomSheet.Title>
            <BottomSheet.Description className="text-center">
              Are you sure you want to logout?
            </BottomSheet.Description>
          </View>
          <View className="gap-3">
            <Button variant="danger" onPress={logout} isDisabled={loggingOut}>
              <Button.Label>{loggingOut ? 'Logging out…' : 'Yes, logout'}</Button.Label>
            </Button>
            <Button
              variant="tertiary"
              onPress={() => setIsOpen(false)}
              isDisabled={loggingOut}
            >
              No, stay
            </Button>
          </View>
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet>
  );
};

export default LogoutBottomSheet;
