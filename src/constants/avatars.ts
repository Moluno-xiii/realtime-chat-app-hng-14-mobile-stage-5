export type AvatarKey = 'maya' | 'jonas' | 'ines' | 'team' | 'noah' | 'ravi' | 'me';

export type AvatarDef = {
  name: string;
  color: string;
  initials: string;
};

export const AVATARS: Record<AvatarKey, AvatarDef> = {
  maya: { name: 'Maya Okafor', color: '#ED756E', initials: 'MO' },
  jonas: { name: 'Jonas Reyes', color: '#00A979', initials: 'JR' },
  ines: { name: 'Inès Lambert', color: '#C282D0', initials: 'IL' },
  team: { name: 'Design Crew', color: '#5680E6', initials: 'DC' },
  noah: { name: 'Noah Berger', color: '#D6812E', initials: 'NB' },
  ravi: { name: 'Ravi Anand', color: '#00A3AB', initials: 'RA' },
  me: { name: 'You', color: '#507EF1', initials: 'YO' },
};
