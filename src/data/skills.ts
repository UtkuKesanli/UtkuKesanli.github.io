export type SkillGroup = {
  title: string;
  index: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Mobile Development',
    index: '01',
    skills: [
      'Flutter',
      'Dart',
      'Responsive UI',
      'Custom Widgets',
      'Navigation',
      'State Management (Provider)',
      'Form Validation',
      'Theming',
      'Localization',
      'JSON Serialization',
    ],
  },
  {
    title: 'UI / Product Design',
    index: '02',
    skills: [
      'Figma',
      'Mobile UI/UX',
      'Design Systems',
      'Component-Based Design',
      'Prototyping',
      'User Flows',
      'Light & Dark Themes',
    ],
  },
  {
    title: 'Backend & Cloud',
    index: '03',
    skills: [
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Storage',
      'Cloud Functions',
      'Firebase App Check',
      'Firestore Security Rules',
      'REST APIs',
      'OpenAI API',
    ],
  },
  {
    title: 'Tools & Platforms',
    index: '04',
    skills: [
      'Git',
      'GitHub',
      'Android Studio',
      'VS Code',
      'Xcode',
      'Google Play Console',
      'App Store Connect',
      'Postman',
    ],
  },
];
