import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>VIBELY</Text>
        <Text style={styles.subtitle}>Connect. Share. Discover.</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.heading}>Welcome to VIBELY!</Text>
        <Text style={styles.description}>
          Your world. Your people. Your vibe.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Discover your community</Text>

      <View style={styles.post}>
        <Text style={styles.username}>VIBELY Community</Text>
        <Text style={styles.message}>
          Welcome to a new place to connect, share and make friends!
        </Text>
        <Text style={styles.likes}>♡  Like     ◯  Comment     ↗  Share</Text>
      </View>

      <View style={styles.navigation}>
        <Text style={styles.navItem}>⌂ Home</Text>
        <Text style={styles.navItem}>⌕ Discover</Text>
        <Text style={styles.navItem}>＋ Create</Text>
        <Text style={styles.navItem}>♡ Activity</Text>
        <Text style={styles.navItem}>☺ Profile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FF',
    padding: 20
  },
  header: {
    paddingTop: 45,
    paddingBottom: 25
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1769D2'
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14
  },
  welcome: {
    backgroundColor: '#1769D2',
    padding: 25,
    borderRadius: 20,
    marginBottom: 30
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    color: '#EAF2FF',
    marginTop: 10
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#1769D2',
    fontWeight: 'bold'
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 15
  },
  post: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20
  },
  username: {
    color: '#1769D2',
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    color: '#334155',
    marginTop: 15,
    lineHeight: 22
  },
  likes: {
    color: '#1769D2',
    marginTop: 20
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  navItem: {
    color: '#1769D2',
    fontSize: 11,
    fontWeight: 'bold'
  }
});
