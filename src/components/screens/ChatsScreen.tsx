import { useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchField } from 'heroui-native';
import { IconButton, SafeAreaWrapper, ScreenHeader } from '@/components/ui';
import { AVATARS, INITIAL_THREADS } from '@/constants';
import { PlusIcon } from '@/components/ui/icons';
import { ThreadRow } from '@/components/chat';

const ChatsScreen = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INITIAL_THREADS;
    return INITIAL_THREADS.filter((t) => {
      const a = AVATARS[t.who];
      return a.name.toLowerCase().includes(q) || t.preview.toLowerCase().includes(q);
    });
  }, [query]);

  return (
    <SafeAreaWrapper className="px-4" scrollable={false} edges={['top', 'left', 'right']}>
      <ScreenHeader
        title="Messages"
        trailing={
          <IconButton accessibilityLabel="Compose">
            <PlusIcon color="#44484E" size={20} />
          </IconButton>
        }
      />

      <View className="pb-3">
        <SearchField value={query} onChange={setQuery}>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search messages, people" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ThreadRow thread={item} isLast={index === filtered.length - 1} />
        )}
        ListEmptyComponent={
          <View className="py-12 items-center gap-3">
            <Text className="text-ink font-semibold" style={{ fontSize: 16 }}>
              No matches for &ldquo;{query}&rdquo;
            </Text>
            <Text className="text-ink-3" style={{ fontSize: 14 }}>
              Try a different name or phrase
            </Text>
          </View>
        }
      />
    </SafeAreaWrapper>
  );
};

export default ChatsScreen;
