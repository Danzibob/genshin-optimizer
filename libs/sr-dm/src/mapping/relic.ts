import type { RelicSetKey, RelicSlotKey } from '@genshin-optimizer/sr-consts'

export const relicSetIdMap: Record<string, RelicSetKey> = {
  101: 'PasserbyOfWanderingCloud',
  102: 'MusketeerOfWildWheat',
  103: 'KnightOfPurityPalace',
  104: 'HunterOfGlacialForest',
  105: 'ChampionOfStreetwiseBoxing',
  106: 'GuardOfWutheringSnow',
  107: 'FiresmithOfLavaForging',
  108: 'GeniusOfBrilliantStars',
  109: 'BandOfSizzlingThunder',
  110: 'EagleOfTwilightLine',
  111: 'ThiefOfShootingMeteor',
  112: 'WastelanderOfBanditryDesert',
  116: 'PrisonerInDeepConfinement',

  301: 'SpaceSealingStation',
  302: 'FleetOfTheAgeless',
  303: 'PanGalacticCommercialEnterprise',
  304: 'BelobogOfTheArchitects',
  305: 'CelestialDifferentiator',
  306: 'InertSalsotto',
  307: 'TaliaKingdomOfBanditry',
  308: 'SprightlyVonwacq',
  311: 'FirmamentFrontlineGlamoth',
}
export type RelicSetId = keyof typeof relicSetIdMap

export const relicSlotMap: Record<string, RelicSlotKey> = {
  HEAD: 'head',
  HAND: 'hand',
  BODY: 'body',
  FOOT: 'feet',
  NECK: 'rope',
  OBJECT: 'sphere',
} as const

export type RelicSlotDMKey =
  | 'BODY'
  | 'FOOT'
  | 'HAND'
  | 'HEAD'
  | 'NECK'
  | 'OBJECT'

export const allRelicStatSubDMKeys = [
  'HPDelta',
  'AttackDelta',
  'DefenceDelta',
  'HPAddedRatio',
  'AttackAddedRatio',
  'DefenceAddedRatio',
  'SpeedDelta',
  'CriticalChanceBase',
  'CriticalDamageBase',
  'StatusProbabilityBase',
  'StatusResistanceBase',
  'BreakDamageAddedRatioBase',
] as const
export type RelicStatSubDMKey = (typeof allRelicStatSubDMKeys)[number]

export const allRelicStatMainDMKeys = [
  'HPDelta',
  'AttackDelta',
  'HPAddedRatio',
  'AttackAddedRatio',
  'DefenceAddedRatio',
  'CriticalChanceBase',
  'CriticalDamageBase',
  'HealRatioBase',
  'StatusProbabilityBase',
  'SpeedDelta',
  'PhysicalAddedRatio',
  'FireAddedRatio',
  'IceAddedRatio',
  'ThunderAddedRatio',
  'WindAddedRatio',
  'QuantumAddedRatio',
  'ImaginaryAddedRatio',
  'BreakDamageAddedRatioBase',
  'SPRatioBase',
] as const
export type RelicStatMainDMKey = (typeof allRelicStatMainDMKeys)[number]

export type RelicStatDMKey = RelicStatSubDMKey | RelicStatMainDMKey
