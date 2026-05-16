export type UserType = "influencer" | "brand";

export interface Creator {
  id: string;
  name: string;
  handle: string;
  location: string;
  niches: string[];
  followers: number;
  engagementRate: number;
  avgReelViews: number;
  avgStoryViews: number;
  pricePerReel: number;
  pricePerStory: number;
  isAvailable: boolean;
  visibility: "public" | "verified_only" | "private";
  isVerified: boolean;
  trustScore: number;
  rating: number;
  totalReviews: number;
  bio: string;
  profileImage?: string;
  initials: string;
  gradient: string;
  pastBrands: string[];
  languages: string[];
  audienceGender: { male: number; female: number };
  audienceAgeRange: string;
  monthlyEarnings: number;
  responseRate: number;
  openToBarter: boolean;
  openToPaid: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  website: string;
  description: string;
  openToPitches: boolean;
  isVerified: boolean;
  budgetMin: number;
  budgetMax: number;
  campaignTypes: string[];
  preferredNiches: string[];
  initials: string;
  accentColor: string;
}

export interface Campaign {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  description: string;
  niche: string;
  deliverables: string[];
  budgetMin: number;
  budgetMax: number;
  deadline: string;
  targetAudience: string;
  status: "active" | "draft" | "completed" | "paused";
  applicants: number;
  accepted: number;
  pending: number;
  createdAt: string;
}

export interface CollabRequest {
  id: string;
  senderId: string;
  senderName: string;
  senderInitials: string;
  senderColor: string;
  receiverId: string;
  type: "request" | "pitch";
  message: string;
  campaignBrief?: string;
  budget?: number;
  deliverables?: string[];
  status: "pending" | "accepted" | "declined";
  createdAt: string;
}

export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderInitials: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantInitials: string;
  participantColor: string;
  lastMessage: string;
  lastTimestamp: string;
  unread: number;
  messages: Message[];
}
