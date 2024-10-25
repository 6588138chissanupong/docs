// src/userSystem.ts

/**
 * Represents the possible roles a user can have
 * @enum {string}
 */
enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

/**
 * Represents a user in the system
 * @interface
 */
interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** User's role in the system */
  role: UserRole;
}

/**
 * Manages user operations in the system
 * @class UserManager
 */
class UserManager {
  private users: User[] = [];

  /**
   * Creates a new user in the system
   * @param {string} name - The user's full name
   * @param {string} email - The user's email address
   * @param {UserRole} role - The user's role
   * @returns {User} The newly created user
   * @throws {Error} If email already exists
   */
  createUser(name: string, email: string, role: UserRole): User {
    if (this.users.some(user => user.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).slice(2),
      name,
      email,
      role
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * Finds a user by their email
   * @param {string} email - The email to search for
   * @returns {User | undefined} The found user or undefined
   */
  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  /**
   * Lists all users with a specific role
   * @param {UserRole} role - The role to filter by
   * @returns {User[]} Array of users with the specified role
   */
  getUsersByRole(role: UserRole): User[] {
    return this.users.filter(user => user.role === role);
  }
}

// Example usage:
const userManager = new UserManager();
const newUser = userManager.createUser(
  'John Doe',
  'john@example.com',
  UserRole.ADMIN
);
// src/userSystem.ts

/**
 * Represents the possible roles a user can have
 * @enum {string}
 */
enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

/**
 * Represents a user in the system
 * @interface
 */
interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** User's role in the system */
  role: UserRole;
}

/**
 * Manages user operations in the system
 * @class UserManager
 */
class UserManager {
  private users: User[] = [];

  /**
   * Creates a new user in the system
   * @param {string} name - The user's full name
   * @param {string} email - The user's email address
   * @param {UserRole} role - The user's role
   * @returns {User} The newly created user
   * @throws {Error} If email already exists
   */
  createUser(name: string, email: string, role: UserRole): User {
    if (this.users.some(user => user.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).slice(2),
      name,
      email,
      role
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * Finds a user by their email
   * @param {string} email - The email to search for
   * @returns {User | undefined} The found user or undefined
   */
  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  /**
   * Lists all users with a specific role
   * @param {UserRole} role - The role to filter by
   * @returns {User[]} Array of users with the specified role
   */
  getUsersByRole(role: UserRole): User[] {
    return this.users.filter(user => user.role === role);
  }
}

// Example usage:
const userManager = new UserManager();
const newUser = userManager.createUser(
  'John Doe',
  'john@example.com',
  UserRole.ADMIN
);
console.log(newUser);