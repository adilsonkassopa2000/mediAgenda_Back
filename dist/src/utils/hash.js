import bcrypt from 'bcrypt';
export class HashBcrypt {
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}
//# sourceMappingURL=hash.js.map