#!/usr/bin/env node
// ABOUTME: Script to help developers set up pnpm authentication for Azure DevOps registries

const fs = require('fs');
const path = require('path');
const os = require('os');

const npmrcPath = path.join(os.homedir(), '.npmrc');

console.log('Setting up pnpm authentication for Azure DevOps...\n');

// Check if user npmrc exists and has the required auth token
const npmrcContent = fs.existsSync(npmrcPath) ? fs.readFileSync(npmrcPath, 'utf8') : '';

const requiredPath = '//pkgs.dev.azure.com/microsoftdesign/951975d5-69cc-4771-9d98-92a4b1a82b2b/_packaging/fluent-icons@Local/npm/registry/:_authToken';
const encodedPath = '//pkgs.dev.azure.com/microsoftdesign/951975d5-69cc-4771-9d98-92a4b1a82b2b/_packaging/fluent-icons%40Local/npm/registry/:_authToken';

if (npmrcContent.includes(requiredPath)) {
  console.log('✅ pnpm authentication is already configured!');
  process.exit(0);
}

// Look for the encoded URL auth token
const encodedMatch = npmrcContent.match(new RegExp(`${encodedPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=(.+)`, 'm'));

if (encodedMatch) {
  const authToken = encodedMatch[1].trim();
  
  // Add the auth token for the unencoded URL that pnpm needs
  const newLine = `${requiredPath}=${authToken}`;
  
  fs.appendFileSync(npmrcPath, `\n${newLine}\n`);
  
  console.log('✅ Added pnpm authentication configuration to ~/.npmrc');
  console.log('\nYou can now run: pnpm install');
} else {
  console.log('❌ Azure DevOps authentication not found in ~/.npmrc');
  console.log('\nPlease run the following commands:');
  console.log('1. npm install -g artifacts-npm-credprovider');
  console.log('2. npm run install-with-auth');
  console.log('3. node scripts/setup-pnpm-auth.js (run this script again)');
}