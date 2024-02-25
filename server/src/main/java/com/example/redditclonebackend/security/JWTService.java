package com.example.redditclonebackend.security;


import io.jsonwebtoken.Claims;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTService {

    @Value("${JWT_SECRET_KEY}")
    private  String secretKey;


    public String extractUsername(String jwtToken) {
        return extractAllClaims(jwtToken).getSubject();
    }

    private Claims extractAllClaims(String jwtToken) {
        return Jwts.
                parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(jwtToken)
                .getPayload();
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        final long currentTime =  System.currentTimeMillis();
        final long expirationTime = currentTime + (24 * 60 * 60 * 1000); //hour * minute * second * milliseconds

        return Jwts.builder()
                .claims(extraClaims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(currentTime))
                .expiration(new Date(expirationTime))
                .signWith(getSigningKey())
                .compact();
    }

    public boolean isTokenValid(String jwtToken, UserDetails userDetails) {
        final Claims claims = extractAllClaims(jwtToken);
        final String userName = claims.getSubject();
        final Date expirationDate = claims.getExpiration();

        return (userName.equals(userDetails.getUsername())
                && !expirationDate.before(new Date()));

    }

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretKey));
    }
}
