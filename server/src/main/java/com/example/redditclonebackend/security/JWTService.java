package com.example.redditclonebackend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JWTService {
    private final Algorithm algorithm;


    public JWTService(@Value("${JWT_SECRET_KEY}") String secretKey) {
        algorithm = Algorithm.HMAC256(secretKey);
    }

    public DecodedJWT decodeJWT(String jwtToken) {
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(jwtToken);

        return decodedJWT;
    }


    public String extractUsername(String jwtToken) {
        DecodedJWT decodedJWT =  decodeJWT(jwtToken);

        Claim usernameClaim = decodedJWT.getClaim("userName");

        return usernameClaim.asString();
    }
}
