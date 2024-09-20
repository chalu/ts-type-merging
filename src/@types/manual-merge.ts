
type Merge<T, U> = T & U;
// type ChangeProp<T, K extends keyof T, U> = Omit<T, K> & { [P in K]: U };
// type ChangeProp<T, K extends keyof T, U> = Omit<T, K> & Record<K, U>;
type ChangeProp<T, K extends keyof T, U> = {
	[P in keyof T]: P extends K ? U : T[P];
};

interface Character {
	doSomething(): Promise<void>;
	friend?: Character;
}

interface SuperHero extends Character {
	doSomethingHeroic(): Promise<void>;
}

export type MyChar = ChangeProp<Character, 'friend', SuperHero>;
export type MyHero = ChangeProp<Merge<Character, SuperHero>, 'friend', SuperHero>;
interface MyIHero extends ChangeProp<Merge<Character, SuperHero>, 'friend', SuperHero> {};

export const myHero: MyIHero = {
	doSomething: () => Promise.resolve(),
	doSomethingHeroic: () => Promise.resolve(),
	friend: {
		doSomething: () => Promise.resolve(),
		doSomethingHeroic: () => Promise.resolve(),
	},
};