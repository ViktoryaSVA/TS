enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    Facebook = 'Facebook',
    Inst = 'Instagram'
}

const social = SocialMedia.Inst
console.log(social)
